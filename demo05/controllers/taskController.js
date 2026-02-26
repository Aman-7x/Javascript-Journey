import { Tasks } from "../models/taskSchema.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    if (!title || !dueDate)
      return res.status(401).json({ Error: "Bad Request Invalid Input" });

    if (!req.user)
      return res.status(404).json({ Error: "User Not Found, SignIn again!!" });

    const task = await Tasks.create({
      title,
      description,
      status,
      dueDate,
      user: req.user._id,
    });

    if (task)
      return res
        .status(201)
        .json({ Message: "Task created Successfully", task: task });
    else return res.status(501).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ Error: "Internal Server Error" });
  }
};

export const fetchTask = async (req, res) => {
  try {
    if (!req.user)
      return res.status(404).json({ Error: "User Not Found, SignIn again!!" });

    const task = await Tasks.find({ user: req.user._id });

    if (task)
      return res
        .status(201)
        .json({ Message: "Task Fetched Successfully", tasks: task });
    else return res.status(501).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ Error: "Internal Server Error" });
  }
};

export const searchTask = async (req, res) => {
  try {
    if (!req.user)
      return res.status(404).json({ Error: "User Not Found, SignIn again!!" });

    const task = await Tasks.findOne({ _id: req.params.id });

    if (task)
      return res
        .status(201)
        .json({ Message: "Task Fetched Successfully", task: task });
    else return res.status(404).json({ Error: "Task Not Found!" });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ Error: "Internal Server Error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    if (!req.user)
      return res.status(404).json({ Error: "User Not Found, SignIn again!!" });

    const id = req.params.id;

    const task = await Tasks.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        description,
        status,
        dueDate,
      },{
        new:true
      }
    );

    if (task)
      return res
        .status(201)
        .json({ Message: "Task Updated Successfully", task: task });
    else return res.status(404).json({ Error: "Task Not Found" });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ Error: "Internal Server Error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
   
    if (!req.user)
      return res.status(404).json({ Error: "User Not Found, SignIn again!!" });

    const id = req.params.id;

    const task = await Tasks.findByIdAndDelete({_id: id});

    if (task)
      return res
        .status(201)
        .json({ Message: "Task Deleted Successfully", task: task });
    else return res.status(404).json({ Error: "Task Not Found" });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ Error: "Internal Server Error" });
  }
};
