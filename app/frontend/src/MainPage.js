import React, { useState } from 'react';

import CategorySelect from './Components/CategorySelect';
import ProductList from './Components/ProductList';
import SearchInput from './Components/SearchInput';
import SiteSelect from './Components/SiteSelect';
import searchByCategoryAndText from './utils/MercadoLivreApi/fetchProducts';
import webScrap from './utils/Scrapper/scrapper';

function ProductSearch() {
  const [category, setCategory] = useState('Celular');
  const [site, setSite] = useState('Mercado Livre');
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    let products = [];
    if (site === 'Mercado Livre') {
      products = await searchByCategoryAndText(category, searchText);
    }
    if (site === 'Buscapé') {
      products = await webScrap(category, searchText);
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
