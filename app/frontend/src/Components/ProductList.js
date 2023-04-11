function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.title}</p>
          <img src={product.thumbnail} alt={product.description} />
          <p>{product.description}</p>
          <p>R${product.price}</p>
          <p>
            <a href={product.permalink}>Link</a>
          </p>
        </li>
      ))}
    </ul>
  );
}

// api descrição https://api.mercadolibre.com/items/$ITEM_ID/description

export default ProductList;
