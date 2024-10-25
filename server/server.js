const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// ENV
require("dotenv").config();

const dbConfig = require("./config/dbConfig");

// MODEL
const userRouter = require("./routes/userRoute");
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
