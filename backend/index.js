import express from "express";
import mongoose from "mongoose";
import booksRoute from "./router/booksRoute.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 5001;
const dbUrl = process.env.DB_URL;

app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to mern stack tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("App connected to the database");
    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
