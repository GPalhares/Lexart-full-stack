const express = require('express');
const path = require('path');
const webScrap = require('./utils/Scrapper/scrapper');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.js'));
// });

app.get('/search/:category/:text', (req, res) => {
  const { category, text } = req.params;
  const data = webScrap(category, text);
  return res.status(200).json(data);
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
