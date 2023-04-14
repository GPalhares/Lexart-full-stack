import React, { useState } from 'react';

import CategorySelect from './Components/CategorySelect';
import ProductList from './Components/ProductList';
import SearchInput from './Components/SearchInput';
import SiteSelect from './Components/SiteSelect';
import fetchMeliApi from './utils/MeliFetch/fetchProducts';
import fetchBuscape from './utils/BuscapeFetch/fetchProducts';

function ProductSearch() {
  const [category, setCategory] = useState('Celular');
  const [site, setSite] = useState('Meli');
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    let products = [];
    if (site === 'Meli') products = await fetchMeliApi(category, searchText);

    if (site === 'Buscape') products = await fetchBuscape(category, searchText);

    if (site === 'Todos') {
      const productsMeli = await fetchMeliApi(category, searchText);
      const productsBuscape = await fetchBuscape(category, searchText);
      products = [...productsMeli, ...productsBuscape];
    }
    setProducts(products);
  };

  return (
    <div>
      <CategorySelect
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <SiteSelect
        value={site}
        onChange={(event) => setSite(event.target.value)}
      />
      <SearchInput
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      <ProductList products={products} />
    </div>
  );
}

export default ProductSearch;
