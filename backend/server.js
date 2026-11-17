const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors({
    origin: [
        "http://127.0.0.1:5173",
        "http://localhost:5173",
        "http://127.0.0.1:4173",
        "http://localhost:4173"
    ]
}));

app.get("/api/health", (req, res) => {
    res.json({
        sistema: "FarmaNorte",
        status: "online",
        mensagem: "Backend funcionando!"
    });
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});
