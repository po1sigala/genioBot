const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const cards = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "home.html"));
});
app.post("/api/newcard", (req, res) => {
    console.log("posted");

    const newREs = req.body;
    cards.push(newREs);
    res.json();
});
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});
