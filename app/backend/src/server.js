const express = require('express');
const path = require('path');
const webScrap = require('./utils/Scrapper/scrapper');
const app = express();
const cors = require('cors');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.get('/search/:category/:text', async (req, res) => {
  const { category, text } = req.params;
  const data = await webScrap(category, text);

  return res.status(200).json(data);
});

app.get('/search/:category', async (req, res) => {
  const { category } = req.params;
  const data = await webScrap(category, '');

  return res.status(200).json(data);
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
