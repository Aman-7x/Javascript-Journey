import { Users } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(401).json({ Error: "Bad Request or Invalid Input" });
    }

    const isExist = await Users.findOne({ email });
    if (isExist)
      return res
        .status(401)
        .json({ Error: "Bad Request User Already Exist!!" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user)
      return res
        .status(201)
        .json({ Message: "User SignUp Successfully", user: user });
    else return res.status(501).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ Error: "Internal Server Error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ Error: "Bad Request or Invalid Input" });
    }

    const isExist = await Users.findOne({ email });
    if (!isExist)
      return res.status(404).json({ Error: "Bad Request User Not Found!!" });

    if (isExist && (await bcrypt.compare(password, isExist.password))) {
      const token = jwt.sign(
        {
          user: {
            _id: isExist._id,
            name: isExist.name,
            email: isExist.email,
          },
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      res.status(200).json({
        Message: "User SignIn Successfully",
        user: isExist,
        token: token,
      });
    } else {
      return res.status(401).json({ Error: "Invalid User Id or Password!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(501).json({ Error: "Internal Server Error" });
  }
};
