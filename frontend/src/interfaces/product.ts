export interface Image {
  url: string,
  alt: string,
}

export interface Product {
  _id: string,
  name: string,
  description: string,
  image: Image,
  price: number,
  stock: number,
  category_id: string,
  petType_id: string[],
  discount: number,
  __v: number,
  createdAt: string,
  updatedAt: string,
  discountEndDate: string,
  discountStartDate: string,
}