import { Contacts } from "../models/contactModel.js";

export const fetchContact = async (req, res) => {
  try {
    const query = {};
    const { name, age, gmail, contactNo, search } = req.query;

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    if (age) query.age = age;
    if (contactNo) query.contactNo = contactNo;

    const contacts = await Contacts.find(query);
    if (contacts)
      return res.status(200).json({ User: req.user, Contact: contacts });
    else return res.status(500).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const createContact = async (req, res) => {
  try {
    const { name, age, email, contactNo } = req.body;

    if (!name || !email || !contactNo)
      return res.status(400).json({ Error: "Invalid Input" });

    const contact = await Contacts.create({
      name,
      age,
      email,
      contactNo,
    });

    if (contact)
      return res
        .status(201)
        .json({ Message: "Contact is created", Contact: contact });
    else return res.status(500).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { name, age, email, contactNo } = req.body;
    const { id } = req.params;

    const isExist = await Contacts.find({ _id: id });

    if (!isExist) return res.status(404).json({ Error: "Invalid Contact" });

    const contact = await Contacts.findByIdAndUpdate(
      { _id: id },
      {
        name,
        age,
        email,
        contactNo,
      },
      {
        new: true,
      }
    );

    if (contact)
      return res
        .status(201)
        .json({ Message: "Contact is updated", Contact: contact });
    else return res.status(500).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const isExist = await Contacts.find({ _id: id });

    if (!isExist) return res.status(404).json({ Error: "Invalid Contact" });

    const contact = await Contacts.findByIdAndDelete({ _id: id });

    if (contact)
      return res
        .status(201)
        .json({ Message: "Contact is deleted", Contact: contact });
    else return res.status(500).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
