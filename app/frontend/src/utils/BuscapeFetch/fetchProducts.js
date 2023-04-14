async function fetchBuscape(category, searchText) {
  const response = await fetch(
    `http://localhost:3030/search/${category}/${searchText}`
  );
  const data = await response.json();
  return data;
}
export default fetchBuscape;
