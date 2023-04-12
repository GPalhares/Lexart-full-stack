const puppeteer = require('puppeteer');

async function webScrap(category, search = '') {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Buscapé doesn't have a separate category for search, so I used only search.
  await page.goto(`https://www.buscape.com.br/search?q=${category + search}`);

  const items = await page.evaluate(() => {
    const items = [];
    const elements = document.querySelectorAll('.Hits_Wrapper__3q_7P > div');

    for (let el of elements) {
      const item = {};
      const imageElement = el.querySelector('span');

      if (imageElement) {
        item.name = el.querySelector('img').getAttribute('alt');
        item.image = el.querySelector('img').getAttribute('src');
        item.price = el
          .querySelector('[data-testid="product-card::price"]')
          .textContent.trim();
        items.push(item);
      }
    }

    return items;
  });

  await browser.close();

  return items;
}

module.exports = webScrap;
