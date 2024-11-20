import localTime from "../../utils/localTime";

const initialProductForm = () => ({
  name: '',
  description: '',
  url: '',
  alt: '',
  price: '',
  stock: '',
  category_id: '',
  petType_id: '',
  discount: '0',
  discountStartDate: localTime(Date.now()),
  discountEndDate: localTime(Date.now()),
});

export default initialProductForm;