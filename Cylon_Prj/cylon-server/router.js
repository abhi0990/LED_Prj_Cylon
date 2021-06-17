"use strict";

const router = require("express").Router();
const robot = require("./controller/robot");

router.post("/configureRobot", robot.configureRobot);
router.get("/startled", robot.startLED);
router.get("/stopled", robot.stopLED);
router.get("/toggle",robot.toggle);

module.exports = router;
