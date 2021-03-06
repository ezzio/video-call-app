const mongoose = require("mongoose");

module.exports = async function connection() {
  mongoose
    .connect(
      process.env.MONGODB_URL || "mongodb://localhost:27017/video_call_app",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      }
    )
    .catch((err) => console.log(err));

  // mongoose.connection.on("connected", () => {
  //   console.log("Mongoose connected to db");
  // });
};
