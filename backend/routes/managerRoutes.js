import express from "express";
import multer from "multer";
import Manager from "../models/Manager.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// ---------------- MULTER SETUP ----------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// ---------------- CREATE MANAGER ----------------
router.post(
  "/",
  upload.fields([{ name: "image", maxCount: 1 }, { name: "documents", maxCount: 5 }]),
  async (req, res) => {
    try {
      const {
        name,
        email,
        department,
        role,
        phone,
        experience,
        salary,
        address,
        password,
        lastDate
      } = req.body;

      const documentPaths = req.files["documents"]?.map((f) => f.path) || [];
      const imagePath = req.files["image"]?.[0]?.path || null;

      // Create manager record
      const newManager = await Manager.create({
        name,
        email,
        department,
        role,
        phone,
        experience,
        salary,
        address,
        lastDate: lastDate ? new Date(lastDate) : null,
        status: lastDate && new Date(lastDate) < new Date() ? "Inactive" : "Active",
        documents: documentPaths,
        image: imagePath || "https://via.placeholder.com/150",
      });

      // Create User Auth Entry for login
      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({
        name,
        email,
        password: hashedPassword,
        role: "manager",
      });

      res.status(201).json({
        message: "Manager added successfully",
        manager: newManager,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// ---------------- GET ALL MANAGERS ----------------
router.get("/", async (req, res) => {
  try {
    const managers = await Manager.find();
    const updatedManagers = managers.map((m) => ({
      ...m.toObject(),
      status: m.lastDate && new Date(m.lastDate) < new Date() ? "Inactive" : "Active",
    }));
    res.json(updatedManagers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------- UPDATE MANAGER ----------------
router.put(
  "/:id",
  upload.fields([{ name: "image", maxCount: 1 }, { name: "documents", maxCount: 5 }]),
  async (req, res) => {
    try {
      const { name, email, department, role, phone, experience, salary, address, lastDate } = req.body;
      const manager = await Manager.findById(req.params.id);
      if (!manager) return res.status(404).json({ message: "Manager not found" });

      manager.name = name || manager.name;
      manager.email = email || manager.email;
      manager.department = department || manager.department;
      manager.role = role || manager.role;
      manager.phone = phone || manager.phone;
      manager.experience = experience || manager.experience;
      manager.salary = salary || manager.salary;
      manager.address = address || manager.address;

      if (lastDate) {
        manager.lastDate = new Date(lastDate);
        manager.status = new Date(lastDate) < new Date() ? "Inactive" : "Active";
      }

      if (req.files["documents"]) {
        const filePaths = req.files["documents"].map((f) => f.path);
        manager.documents = [...(manager.documents || []), ...filePaths];
      }

      if (req.files["image"]?.[0]) {
        manager.image = req.files["image"][0].path;
      }

      const updated = await manager.save();
      res.json({ message: "Manager updated successfully", manager: updated });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// ---------------- DELETE MANAGER ----------------
router.delete("/:id", async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id);
    if (!manager) return res.status(404).json({ message: "Manager not found" });

    await Manager.findByIdAndDelete(req.params.id);
    res.json({ id: req.params.id, message: "Manager deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
