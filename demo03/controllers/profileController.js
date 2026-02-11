import { Profile } from "../models/profileModel.js";
import { User } from "../models/userModels.js";

export const fetechProfile = async (req, res) => {
  try {
     
    const user = await User.findOne({ _id: req.user._id }).populate("profile");

    if (!user) return res.status(404).json({ Error: "User Not Found" });

    return res
      .status(200)
      .json({ Message: "Profile Fetched Successfully", User: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const createProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });

    if (!user) return res.status(404).json({ Error: "User Not Found" });
 
    if (user.profile) return res.status(400).json({ Error: "Profile Already Exist!" });

    const { bio, age } = req.body;

    if (!bio || !age) return res.status(400).json({ Error: "Invalid Input" });

    const profile = await Profile.create({
        bio,
        age
    });

    if (!profile) return res.status(500).json({ Error: "Something went wrong, Try again later!" });

    user.profile = profile._id;
    await user.save();

    return res
      .status(200)
      .json({ Message: "Profile Created Successfully", User: user,"Profile":profile });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};


export const updateProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });

    if (!user) return res.status(404).json({ Error: "User Not Found" });

    const { bio, age } = req.body;

    if (!bio || !age) return res.status(400).json({ Error: "Invalid Input" });
    
    if (!user.profile) return res.status(404).json({ Error: "Profile not found!" });

    const updatedProfile = await Profile.findByIdAndUpdate(
      { _id: user.profile  },
      {
        bio: bio ,
        age: age ,
      },
      {
        new: true,
      }
    );

    return res
      .status(200)
      .json({ Message: "Profile Updated Successfully", User: user,"Profile":updatedProfile });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};


export const deleteProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });

    if (!user) return res.status(404).json({ Error: "User Not Found" });

    if (!user.profile) return res.status(404).json({ Error: "Profile not found!" });

    const deleteProfile = await Profile.findByIdAndDelete({ _id: user.profile });

     if(deleteProfile){
        user.profile = null;
        await user.save();
     }

    return res
      .status(200)
      .json({ Message: "Profile Deleted Successfully", User: user,"Profile":deleteProfile });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
