import formatPrices from '../functions/formatPrices';

async function fetchMeliApi(category, search) {
  const categoryIds = {
    Geladeira: 'MLB181294',
    TV: 'MLB1002',
    Celular: 'MLB1055',
  };

  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${search}&category=${categoryIds[category]}`;
  const response = await fetch(url);
  const data = await response.json();

  const result = data.results.map(({ price, permalink, thumbnail, title }) => ({
    price,
    permalink,
    thumbnail,
    title,
  }));
  return formatPrices(result);
}
export default fetchMeliApi;
