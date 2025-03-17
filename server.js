// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import fs from "fs";

// const { PORT, BACKEND_URL } = process.env;

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(express.static("public"));

// // Read data from about.json
//   function readAbout() {
//     const aboutData = fs.readFileSync("./data/about.json");
//     const parsedData = JSON.parse(aboutData);
//     return parsedData;
//   }

// app.get('/', (req, res) => {
//     res.send("Welcome to my website 👋");
// });

// // Route for about page
// app.get("/about", (req, res) => {
//   const about = readAbout();
//   // send about page data as a json with res
//   res.json(about);
// });

// app.listen(PORT, () => {
//     console.log(`Listening at ${BACKEND_URL}:${PORT}`);
//   });