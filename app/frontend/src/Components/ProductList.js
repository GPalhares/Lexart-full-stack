function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.thumbnail} alt={product.id} />
          <p>{product.title}</p>
          <p>R${product.price.toFixed(2)}</p>
          <p>
            <a href={product.permalink}>Link</a>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
