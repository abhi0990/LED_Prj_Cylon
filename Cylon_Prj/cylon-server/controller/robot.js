"use strict";

const cylon = require("cylon");
let robot = null;
exports.configureRobot = async (req, res, next) => {
  try {
    console.log("Req", req.body);
    // robot = cylon.robot(req.body).start();
    console.log("Robot configuration done..!!!");
    res.send({ statue: "Success", data: {status: "success", msg:"Robot configuration done..!!!" }});
  } catch {
    next(e);
  }
};

exports.startLED = async (req, res, next) => {
  try {
    //robot.devices.led.turnOn();
    console.log("Led Started");
    res.send({ statue: "Success", data: "Led Started" });
  } catch {
    next(e);
  }
};

exports.stopLED = async (req, res, next) => {
  try {
    // robot.devices.led.turnOff();
    console.log("Led Stop");
    res.send({ statue: "Success", data: "Led Stop" });
  } catch {
    next(e);
  }
};

exports.toggle = async (req, res, next) => {
  try {
    // robot.devices.led.toggle();
    console.log("Led Toggle");
    res.send({ statue: "Success", data: "Led Toggle" });
  } catch {
    next(e);
  }
};
