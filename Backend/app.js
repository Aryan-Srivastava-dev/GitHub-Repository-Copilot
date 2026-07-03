import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { prisma, pool } from "./lib/prisma.js";
import authRouter from "./routes/authRoute.js";

const port = process.env.PORT;
const app = express();

app.use(cors({
    origin: ""
}));
app.use(cookieParser());
app.use(express.json());
app.use(authRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

process.on("SIGINT", async () => {
    console.log("Shutting down...");
    await prisma.$disconnect();
    await pool.end();
    process.exit(0);
});
