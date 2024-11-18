const normalizeNewProduct = (product) => ({
  name: product.name,
  description: product.name,
  image: { url: product.url, alt: product.alt },
  price: product.price,
  stock: product.stock,
  category_id: product.category_id,
  petType_id: product.petType_id,
});

export default normalizeNewProduct;