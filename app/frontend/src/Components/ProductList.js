function ProductList({ products }) {
  return (
    <ul>
      {products.map((product, i) => (
        <li key={i}>
          <p>{product.title}</p>
          <img
            src={product.thumbnail}
            alt={product.title}
            width="100"
            height="100"
          />
          <p>{product.price}</p>
          <p>
            <a href={product.permalink}>Link</a>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
