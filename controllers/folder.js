import Folder from "../models/folder.js";

export const get = async (req, res) => {
  try {
    const folders = await Folder.find({ user: req.user._id }).populate(
      "parent"
    );

    return res.status(200).json({ message: "success", folders });
  } catch (err) {
    console.log("error : ", err.message);

    res.status(500).json({ message: "server error" });
  }
};

export const create = async (req, res) => {
  const { name, parent } = req.body;

  try {
    const folder = new Folder({
      name,
      parent,
      user: req.user._id,
    });

    await folder.save();

    return res.status(201).json({ message: "success", folder });
  } catch (err) {
    console.log("error : ", err.message);

    res.status(500).json({ message: "server error" });
  }
};
