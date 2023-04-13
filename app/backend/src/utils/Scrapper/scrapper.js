const puppeteer = require('puppeteer');

async function webScrap(category, search = '') {
  const itens = {};
  const data = [];
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`https://www.buscape.com.br/search?q=${category + search}`);

  itens.price = await page.$$eval('.Text_MobileHeadingS__Zxam2', (element) =>
    element.map((price) => price.innerHTML)
  );
  itens.title = await page.$$eval(
    '.SearchCard_ProductCard_Name__ZaO5o',
    (element) => element.map((title) => title.innerHTML)
  );
  itens.permalink = await page.$$eval(
    '.SearchCard_ProductCard_Inner__7JhKb',
    (element) => element.map((link) => link.href)
  );

  itens.thumbnail = await page.$$eval(
    '.SearchCard_ProductCard_Image__ffKkn span img',
    (element) => element.map((link) => link.src)
  );
  itens.price.forEach((item, i) => {
    data.push({
      price: itens.price[i],
      title: itens.title[i],
      permalink: itens.permalink[i],
      thumbnail: itens.thumbnail[i],
    });
  });

  console.log(data);

  await browser.close();
  return data;
}
module.exports = webScrap;
