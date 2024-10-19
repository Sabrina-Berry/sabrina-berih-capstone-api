import express from "express";
import cors from "cors";
import "dotenv/config";

const { PORT, BACKEND_URL } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening at ${BACKEND_URL}:${PORT}`);
  });