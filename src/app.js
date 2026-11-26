require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());   // permet de lire le JSON envoyé dans les requêtes

app.get("/", (req, res) => {
    res.json({ message: "API My Social Networks en ligne" });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connecté à MongoDB");
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Serveur sur http://localhost:${process.env.PORT}`);
        });
    })
    .catch((err) => console.error("❌ Erreur MongoDB :", err.message));