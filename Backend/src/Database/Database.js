const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://PandeyG:NirmalPandey%40123p@namastenode.35jho.mongodb.net/Vehicle_DataBase"
  );
};

module.exports = { connectDb };
