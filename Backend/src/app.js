const express = require("express");
const { connectDb } = require("./Database/Database");
const Inventory = require("./model/vehicleModel");

const app = express();

// var vehicleRoute = require("./Routes/vehicleRoute");

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
    app.listen(3000, () => {
      console.log("server is listening to port 3000");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
