import express from "express";
import cors from "cors";



const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // FE URL
app.use(express.json());

// test ruta
app.get("/api/hello", (req, res) => res.send("BE radi 🚀"));

export default app;