import { Post } from "../models/postModel.js";
import { User } from "../models/userModels.js";

export const createPost = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user?._id });

    if (!user) return res.status(404).json({ Error: "User Not Found" });

    const { title, description, rating, isPublic } = req.body;

    if (!title || !description)
      return res.status(400).json({ Error: "Invalid Input" });

    const post = await Post.create({
      title,
      description,
      rating,
      isPublic,
      user: user._id,
    });

    if (!post)
      return res
        .status(500)
        .json({ Error: "Something went wrong, Try again later!" });

    return res
      .status(200)
      .json({ Message: "Post Created Successfully", User: user, Post: post });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const isExist = await Post.findOne({ _id: id });

    const user = await User.findOne({ _id: req.user?._id });

    if (!user) return res.status(404).json({ Error: "User Not Found" });

    if (!isExist) return res.status(404).json({ Error: "Post Not Found" });

    const { title, description, rating, isPublic } = req.body;

    if (!title || !description)
      return res.status(400).json({ Error: "Invalid Input" });
    console.log(user._id.toString());
    console.log(isExist.user.toString());

    if (user._id.toString() !== isExist.user.toString())
      return res.status(401).json({ Error: "Unauthorized Operation!!" });

    const post = await Post.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        description,
        rating,
        isPublic,
      },
      {
        new: true,
      }
    );

    if (!post)
      return res
        .status(500)
        .json({ Error: "Something went wrong, Try again later!" });

    return res
      .status(200)
      .json({ Message: "Post Updated Successfully", Post: post });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const fetchPost = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });

    if (!user) return res.status(404).json({ Error: "User Not Found" });

    const posts = await Post.find({}).populate("user");

    if (!posts)
      return res
        .status(500)
        .json({ Error: "Something went wrong, Try again later!" });

    return res
      .status(200)
      .json({ Message: "Post Fetched Successfully", Post: posts });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: req.user?._id });

    if (!user) return res.status(404).json({ Error: "User Not Found" });

    const isExist = await Post.findOne({ _id: id });

    if (!isExist) return res.status(404).json({ Error: "Post Not Found" });

    if (user._id.toString() !== isExist.user.toString())
      return res
        .status(401)
        .json({ Error: "Unauthorized for this operation!!" });

    const post = await Post.findByIdAndDelete({
      _id: id,
    });

    if (!post)
      return res
        .status(500)
        .json({ Error: "Something went wrong, Try again later!" });

    return res
      .status(200)
      .json({ Message: "Post Delete Successfully", "Deleted Post": post });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findOne({ _id: id });
    if (!post) return res.status(404).json({ Error: "Post Not Found" });

    const user = await User.findOne({ _id: req.user?._id });

    if (!user) return res.status(404).json({ Error: "User Not Found" });

    const alreadyLiked = user.likedPosts.includes(post._id);
        

    if (alreadyLiked) {
      //   const index = user.likedPosts.indexOf(post._id);
      //   user.likedPosts.splice(index, 1);
      //   await user.save();

      //   const userIndex = post.likedBy.indexOf(user._id);
      //   post.likedBy.splice(userIndex, 1);
      //   await post.save();

      await User.findByIdAndUpdate(
        { _id: user._id },
        {
          $pull: { likedPosts: post._id },
        }
      );
      await Post.findByIdAndUpdate(
        { _id: post._id },
        {
          $pull: { likedBy: user._id },
        }
      );
    } else {
      //   user.likedPosts.push(post._id);
      //   await user.save();
      //   post.likedBy.push(user._id);
      //   await post.save();
      await User.findByIdAndUpdate(
        { _id: user._id },
        {
          $addToSet: { likedPosts: post._id },
        }
      );
      await Post.findByIdAndUpdate(
        { _id: post._id },
        {
          $addToSet: { likedBy: user._id },
        }
      );
    }

    return res
      .status(200)
      .json({ Message: "Post Liked Successfully", Post: post });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
