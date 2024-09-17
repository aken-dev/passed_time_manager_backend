import express from "express";
const router = express.Router();
const {
    getAllSchedules,
    createSchedule,
    getSingleSchedule,
    updateSchedule,
    deleteSchedule,
    resOptions
} = require("../controllers/schedules");

router.get("/", getAllSchedules);
router.post("/", createSchedule);
router.options("/", createSchedule);
router.get("/:id", getSingleSchedule);
router.patch("/:id", updateSchedule);
router.delete("/:id", deleteSchedule);
router.options("/:id", resOptions);
export = router;