
const express = require("express");

const app = express();

const PORT = 3000;

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
