import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cloudinary from "../configs/cloudConnect.js";

dotenv.config();

//SignUp route
export const signUp = async (req, res) => {
  try {
    const { name, email, password, profilePic } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ Error: "Invalid Input" });

    const isExists = await User.findOne({ email: email });

    if (isExists)
      return res.status(401).json({ Error: "User Already Exists!!" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profilePic: profilePic ?? null,
    });

    if (user)
      return res.status(201).json({ Message: "User is Created ", user: user });
    else return res.status(500).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log("Error : ", err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

//SignIn route
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ Error: "Invalid Input" });

    const user = await User.findOne({ email: email });

    // if(!user)
    //         return res.status(404).json({"Error":"User Not Found"});

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      return res
        .status(200)
        .json({ Message: "SignIn Successfully", user: user, token: token });
    } else return res.status(401).json({ Error: "Invalid User or Password" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

//Upload Profile Pic using Disk Storage
// export const profilePic = async (req, res) => {
//   try {
//     const user = await User.findOne({ _id: req.user._id });

//     if (!user) return res.status(404).json({ Error: "User Not Found" });

//     user.profilePic = {
//       imageName: req.file.filename,
//       address: req.file.path,
//     };

//     await user.save();
//     return res
//       .status(200)
//       .json({ Message: "File Uploaded", userProfile: user.profilePic });
//   } catch (err) {
//     console.log(err);
//   }
// };

//Upload profile pic using memoryStorage ( cloudinary)
export const profilePic = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });

    if (!user) return res.status(404).json({ Error: "User Not Found" });

    //wrap it into promise to make code async
    const result = await new Promise((resolve, reject) => {
      //upload_stream() return writable Stream
      const stream = cloudinary.uploader.upload_stream(
        {
          //optional
          folder: "Profile-Pictures",
        },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
      stream.end(req.file.buffer); //sending buffer data into writeable stream
    });

    user.profilePic = {
      public_id: result.public_id,
      url: result.url,
    };
    await user.save();
     
    return res.status(201).json({
      Message: "Profile Picture Uploaded Successfully",
      Profile: user.profilePic,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ Users: users });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
