import express from "express";
import "dotenv/config";
import { prisma, pool } from "../lib/prisma.js";

const port = process.env.PORT;
const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Welcome");
// });

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

process.on("SIGINT", async () => {
    console.log("Shutting down...");
    prisma.$disconnect();
    pool.end();
    process.exit(0);
});
