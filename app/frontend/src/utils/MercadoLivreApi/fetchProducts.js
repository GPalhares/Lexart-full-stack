async function searchByCategoryAndText(category, search) {
  const categoryIds = {
    Geladeira: 'MLB181294',
    TV: 'MLB1002',
    Celular: 'MLB1055',
  };

  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${search}&category=${categoryIds[category]}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
export default searchByCategoryAndText;
