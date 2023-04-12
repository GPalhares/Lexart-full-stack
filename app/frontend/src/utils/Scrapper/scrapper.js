const puppeteer = require('puppeteer');

async function webScrap(category, search = '') {
  const itens = {};
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://www.buscape.com.br/search?q=${category + search}`);
  itens.price = await page.$$eval('.Text_MobileHeadingS__Zxam2', (element) =>
    element.map((price) => price.innerHTML)
  );
  itens.title = await page.$$eval(
    '.SearchCard_ProductCard_Name__ZaO5o',
    (element) => element.map((title) => title.innerHTML)
  );
  itens.link = await page.$$eval(
    '.SearchCard_ProductCard_Inner__7JhKb',
    (element) => element.map((link) => link.href)
  );

  itens.image = await page.$$eval(
    '.SearchCard_ProductCard_Image__ffKkn span img',
    (element) => element.map((link) => link.src)
  );

  console.log(itens);

  await browser.close();
  return itens;
}

module.exports = webScrap;

webScrap('celular', '');
