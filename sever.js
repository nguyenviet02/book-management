const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const port = process.env.port || 3000;
process.noDeprecation = true;

// Connect to database
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to database successfully");
  });

// Start sever
const server = app.listen(port, () => {
  console.log(`app running on port = ${port}`);
});
