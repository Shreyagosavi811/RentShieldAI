import PG from "../models/PG.js";

// CREATE PG
export const createPG = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const {
      title,
      address,
      city,
      state,
      pincode,
      rent,
      deposit,
      roomType,
      description,
      rules,
    } = req.body;

    // ✅ FIX facilities (comes as string or array)
    const facilities = Array.isArray(req.body.facilities)
      ? req.body.facilities
      : [req.body.facilities];

    // ✅ FIX images
    const images = req.files.map((file) => file.path);

    const pg = await PG.create({
      title,
      address,
      city,
      state,
      pincode,
      rent,
      deposit,
      roomType,
      facilities,
      description,
      rules,
      images,
      owner: req.user._id,
    });

    res.status(201).json(pg);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// GET ALL PGs (Search)
export const getPGs = async (req, res) => {
  try {
    const { city, keyword } = req.query;

    let query = {};

    if (city) {
      query.city = new RegExp(city, "i");
    }

    if (keyword) {
      query.title = new RegExp(keyword, "i");
    }

    const pgs = await PG.find(query).populate("owner", "name email");

    res.json(pgs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE PG
export const getPGById = async (req, res) => {
  try {
    const pg = await PG.findById(req.params.id).populate("owner");

    if (!pg) {
      return res.status(404).json({ message: "PG not found" });
    }

    res.json(pg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE PG
export const updatePG = async (req, res) => {
  try {
    const pg = await PG.findById(req.params.id);

    if (!pg) return res.status(404).json({ message: "PG not found" });

    if (pg.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const updated = await PG.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE PG
export const deletePG = async (req, res) => {
  try {
    const pg = await PG.findById(req.params.id);

    if (!pg) return res.status(404).json({ message: "PG not found" });

    if (pg.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await pg.deleteOne();

    res.json({ message: "PG deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};