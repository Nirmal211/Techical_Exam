const express = require("express");
const { connectDb } = require("./Database/Database");
const Inventory = require("./model/vehicleModel");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = 7777;

// Configue Cors
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Allow all origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed Methods
  allowedHeaders: ["Content-type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to the Technical Exam Page");
});

app.post("/setData", async (req, res) => {
  const data = req.body;
  const vehicleData = await Inventory(data);

  try {
    await vehicleData.save();
    res.send("data added successfully");
  } catch (err) {
    res.send("some problem with data");
  }
});

app.get("/get/inventory", async (req, res) => {
  try {
    const data = await Inventory.find({});
    res.send(data);

    // if (data) {
    // } else {
    //   throw new Error("data is not present");
    // }
  } catch (err) {
    res.status({ ERR: err.message });
  }
});

connectDb()
  .then(() => {
    console.log("server is connected to database");
    app.listen(PORT, () => {
      console.log(`server is listening to port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
