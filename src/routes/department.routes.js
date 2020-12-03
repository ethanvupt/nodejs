const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/department.controller");

// Retrieve all departments
router.get("/", departmentController.findAll);

// Create a new department
router.post("/", departmentController.create);

// Retrieve a single department with id
router.get("/:id", departmentController.findById);

// Update a department with id
router.put("/:id", departmentController.update);

// Delete a department with id
router.delete("/:id", departmentController.delete);
module.exports = router;
