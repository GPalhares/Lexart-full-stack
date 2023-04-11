async function searchByCategoryAndText(category, search) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${search}&category=${category}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
export default searchByCategoryAndText;
