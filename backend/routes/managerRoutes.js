import express from "express";
import multer from "multer";
import Manager from "../models/Manager.js";

const router = express.Router();

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save files in /uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Create a new manager
router.post("/", upload.array("documents", 5), async (req, res) => {
  try {
    const { name, email, department, role, phone, experience, salary, address, lastDate } = req.body;

    const filePaths = req.files.map((file) => file.path);

    const manager = new Manager({
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
      documents: filePaths,
    });

    const saved = await manager.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all managers
router.get("/", async (req, res) => {
  try {
    const managers = await Manager.find();
    // update status based on lastDate
    const updatedManagers = managers.map((m) => {
      if (m.lastDate && new Date(m.lastDate) < new Date()) {
        m.status = "Inactive";
      } else {
        m.status = "Active";
      }
      return m;
    });
    res.json(updatedManagers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update manager
router.put("/:id", upload.array("documents", 5), async (req, res) => {
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

    if (req.files.length > 0) {
      const filePaths = req.files.map((file) => file.path);
      manager.documents = [...(manager.documents || []), ...filePaths];
    }

    const updated = await manager.save();
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
