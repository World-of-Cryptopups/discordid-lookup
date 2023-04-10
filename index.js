const fetch = require("cross-fetch");
const express = require("express");
const cors = require("cors");

const app = express();

const apiUrl = "https://discord.com/api/v10/users/";
const TOKEN = process.env.TOKEN;
const PORT = process.env.PORT ?? 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Discord Id Lookup");
});

app.get("/id/:id", async (req, res) => {
  const { id } = req.params;

  const r = await fetch(apiUrl + id, {
    method: "GET",
    headers: {
      Authorization: "Bot " + TOKEN,
    },
  });

  const response = await r.json();

  res.status(r.status).json(response);
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});

module.exports = app;
