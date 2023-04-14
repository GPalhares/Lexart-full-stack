async function fetchMeli(category, searchText = '') {
  const response = await fetch(
    `http://localhost:3030/meli/${category}/${searchText}`
  );
  const data = await response.json();
  return data;
}
export default fetchMeli;
