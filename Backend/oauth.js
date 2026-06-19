const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("Welcome");
// });

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
