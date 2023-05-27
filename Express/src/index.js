const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT ?? 3333;
const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Aplicação Express utilizando JavaScript!\nWelcome to Web Academy!");
});

app.listen(PORT, () => {
  console.log(`App Express iniciada na porta ${PORT}`);
});
