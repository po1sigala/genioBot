const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    console.log("got it");
    console.log(req);
});
app.post("/api/newcard", (req, res) => {
    console.log("posted");
    console.log(req);
});
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});
