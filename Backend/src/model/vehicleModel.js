const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    condition: {
      type: String,
    },
    description: {
      type: String,
    },
    title: {
      type: String,
    },
    brand: {
      type: String,
    },
    price: {
      type: String,
    },
    product_type: {
      type: String,
    },
    custom_label_0: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Inventory = mongoose.model("Inventory", vehicleSchema);

module.exports = Inventory;
