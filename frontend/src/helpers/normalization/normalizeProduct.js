const normalizeProduct = (product) => ({
  name: product.name,
  description: product.description,
  image: { url: product.url, alt: product.alt },
  price: product.price,
  stock: product.stock,
  category_id: product.category_id,
  petType_id: product.petType_id,
  discount: product.discount,
  discountStartDate: product.discountStartDate,
  discountEndDate: product.discountEndDate,
});

export default normalizeProduct;