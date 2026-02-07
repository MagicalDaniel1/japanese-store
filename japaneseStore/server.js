const express = require("express");

const app = express();
app.use(express.json());

let storeData = {};

app.post("/api/organisation", (req, res) => {
    storeData = req.body;
    console.log("POST данные:", storeData);
    res.status(201).json({ message: "Создано", data: storeData });
});

app.patch("/api/organisation", (req, res) => {
    storeData = { ...storeData, ...req.body };
    console.log("PATCH данные:", storeData);
    res.status(200).json({ message: "Обновлено", data: storeData });
});

app.get("/api/organisation", (req, res) => {
    res.status(200).json(storeData);
});

app.listen(3000, "127.0.0.1", () => {
    console.log("Server running → http://127.0.0.1:3000");
});

module.exports = app;