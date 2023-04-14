function formatPrices(products) {
  return products.map((product) => {
    const formattedPrice = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
    return {
      ...product,
      price: formattedPrice,
    };
  });
}
module.exports = formatPrices;
