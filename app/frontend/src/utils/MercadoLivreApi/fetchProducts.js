async function searchByCategoryAndText(category, search) {
  let categoryId = '';
  if (category === 'Geladeira') {
    categoryId = 'MLB181294';
  }
  if (category === 'TV') {
    categoryId = 'MLB1002';
  }
  if (category === 'Celular') {
    categoryId = 'MLB1055';
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${search}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
export default searchByCategoryAndText;
