import { Users } from "../models/userModel.js";

export const fetchAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});

    if (users)
      return res
        .status(200)
        .json({ Message: "User Fetched Successfully", user: users });
    else
      return res
        .status(200)
        .json({ Message: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error!" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const isExist = await Users.findOne({ _id: id });
    if (!isExist) return res.status(404).json({ Error: "User Doesn't Exists" });

    const user = await Users.findByIdAndDelete({ _id: id });

    if (user)
      return res.status(200).json({
        Message: "User Deleted Successfully",
        user: user,
      });
    else
      return res
        .status(500)
        .json({ Message: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Message: "Internal Server Error!" });
  }
};
