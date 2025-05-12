
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Belvedere Bot is live!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot Belvedere activo en puerto ${PORT}`);
});
