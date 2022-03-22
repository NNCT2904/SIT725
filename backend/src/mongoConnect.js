var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const mongoConnect = async (uri) => {
  try {
    if (!uri) throw new Error("MongoDB URI is required");

    await mongoose.connect(uri).then(
      () => {
        console.log("Connected to MongoDB");
      },
      (err) => {
        console.log("Cannot connect to MongoDb: " + err);
      }
    );
  } catch (error) {
    console.log(`${error}\nCannot connect to MongoDB`);
  }
};

module.exports = mongoConnect;
