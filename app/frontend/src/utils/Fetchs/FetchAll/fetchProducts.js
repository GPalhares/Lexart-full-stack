async function fetchAll(category, searchText = '') {
  const response = await fetch(
    `http://localhost:3030/all/${category}/${searchText}`
  );
  const data = await response.json();
  return data;
}
export default fetchAll;
