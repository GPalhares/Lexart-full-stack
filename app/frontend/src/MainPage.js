import React, { useState } from 'react';

import CategorySelect from './Components/CategorySelect';
import ProductList from './Components/ProductList';
import SearchInput from './Components/SearchInput';
import SiteSelect from './Components/SiteSelect';
import searchByCategoryAndText from './utils/MercadoLivreApi/fetchProducts';

function ProductSearch() {
  const [category, setCategory] = useState('Mobile');
  const [site, setSite] = useState('Mercado Livre');
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSiteChange = (event) => {
    setSite(event.target.value);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = async () => {
    const products = await searchByCategoryAndText('MLB1000', 'smartphone');
    setProducts(products);
    console.error(products);
  };

  return (
    <div>
      <CategorySelect value={category} onChange={handleCategoryChange} />
      <br />
      <SiteSelect value={site} onChange={handleSiteChange} />
      <br />
      <SearchInput value={searchText} onChange={handleSearchTextChange} />
      <br />
      <button onClick={handleSearch}>Search</button>
      <br />
      <br />
      <ProductList products={products} />
    </div>
  );
}

export default ProductSearch;
