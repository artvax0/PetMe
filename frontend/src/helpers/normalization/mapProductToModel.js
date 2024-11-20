import localTime from "../../utils/localTime";

const mapProductToModel = (product) => ({
  name: product.name,
  description: product.description,
  url: product.image.url,
  alt: product.image.alt,
  price: product.price,
  stock: product.stock,
  category_id: product.category_id,
  petType_id: product.petType_id,
  discount: product?.discount || '0',
  discountStartDate: localTime(product?.discountStartDate) || localTime(Date.now()),
  discountEndDate: localTime(product?.discountEndDate) || localTime(Date.now()),
});

export default mapProductToModel;