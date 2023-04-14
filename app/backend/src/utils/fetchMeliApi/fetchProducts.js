const axios = require('axios');
const formatPrices = require('../functions/formatPrices');

async function fetchMeliApi(category, search = '') {
  const categoryIds = {
    Geladeira: 'MLB181294',
    TV: 'MLB1002',
    Celular: 'MLB1055',
  };
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${search}&category=${categoryIds[category]}`;
  const response = await axios.get(url);
  const data = response.data;
  //Removing unnecessary keys from data
  const result = data.results.map(({ price, permalink, thumbnail, title }) => ({
    price,
    permalink,
    thumbnail,
    title,
  }));
  return formatPrices(result);
}

module.exports = fetchMeliApi;
