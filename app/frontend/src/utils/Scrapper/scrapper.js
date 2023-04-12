const puppeteer = require('puppeteer');

async function webScrap(category, search = '') {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Buscapé doesn't have a separate category for search, so I used only search.
  await page.goto(`https://www.buscape.com.br/search?q=${category + search}`);

  const items = await page.evaluate(() => {
    const items = [];
    const elements = document.querySelectorAll('.Hits_Wrapper__3q_7P > div');

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      const item = {};
      const imageElement = el.querySelector('span');
      const linkElement = el.querySelector(
        '.SearchCard_ProductCard_Inner__7JhKb'
      );

      if (imageElement) {
        item.title = el.querySelector('img').getAttribute('alt');
        let thumbNail = el.querySelector('img').getAttribute('src');
        item.thumbnail = thumbNail;
        item.price = el
          .querySelector('[data-testid="product-card::price"]')
          .textContent.trim();
        items.push(item);
      }

      if (linkElement) {
        item.permalink = linkElement.getAttribute('href');
        items.push(item);
      }
    }

    return items;
  });

  await browser.close();
  console.log(items);
  return items;
}

module.exports = webScrap;
