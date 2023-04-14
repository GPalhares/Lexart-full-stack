const express = require('express');
const path = require('path');
const webScrap = require('./utils/Scrapper/scrapper');
const app = express();
const cors = require('cors');
const fetchMeliApi = require('./utils/fetchMeliApi/fetchProducts');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/buscape/:category/:text?', async (req, res) => {
  const { category, text } = req.params;
  const data = await webScrap(category, text);
  return res.status(200).json(data);
});

app.get('/meli/:category/:text?', async (req, res) => {
  const { category, text } = req.params;
  const data = await fetchMeliApi(category, text);
  console.log(data);
  return res.status(200).json(data);
});

app.get('/all/:category/:text?', async (req, res) => {
  const { category, text } = req.params;
  const dataMeli = await fetchMeliApi(category, text);
  const dataBuscape = await webScrap(category, text);
  const data = [...dataMeli, ...dataBuscape];
  console.log(data);
  return res.status(200).json(data);
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
