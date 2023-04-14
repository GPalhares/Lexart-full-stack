const puppeteer = require('puppeteer');

async function webScrap(category, search = '') {
  const itens = {};
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //High height for scrap all images at the same time
  await page.setViewport({
    width: 1200,
    height: 5600,
  });
  await page.goto(`https://www.buscape.com.br/search?q=${category + search}`);
  //Time optimization
  await page.waitForSelector('.Text_MobileHeadingS__Zxam2');

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
  const data = itens.price.map((price, i) => ({
    price,
    title: itens.title[i],
    permalink: itens.permalink[i],
    thumbnail: itens.thumbnail[i],
  }));

  await browser.close();
  return data;
}
module.exports = webScrap;
