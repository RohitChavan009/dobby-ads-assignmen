import Image from "../models/image.js";

export const create = async (req, res) => {
  const { name, folder } = req.body;

  const path = req.file.path;

  try {
    const image = new Image({
      name,
      path,
      folder,
      user: req.user._id,
    });

    await image.save();

    return res.status(201).json({ message: "success", image });
  } catch (err) {
    console.log("error : ", err.message);

    res.status(500).json({ message: "server error" });
  }
};

export const search = async (req, res) => {
  const { query } = req.query;

  try {
    const images = await Image.find({
      name: new RegExp(query, "i"),
      user: req.user._id,
    });

    return res.status(201).json({ message: "success", images });
  } catch (err) {
    console.log("error : ", err.message);

    res.status(500).json({ message: "server error" });
  }
};
