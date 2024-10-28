import { Grid2 } from "@mui/material";
import CardComponent from "../components/cards/CardComponent";

  const products = [
    {
        "_id": "671a359047692d2c579deed4",
        "name": "Dog Food",
        "description": "High-quality dog food for all breeds.",
        "image": {
            "url": "https://www.naturesrecipe.com/wp-content/uploads/2024/04/Natures-Recipe-Chicken-Barley-Brown-Rice-Small-Bites-Whole-Grain-Dry-Dog-Food-4LB-1024x1024.png",
            "alt": "Dog Food Image",
            "_id": "671f7d80411b6032729dfeba"
        },
        "price": 50,
        "stock": 150,
        "category_id": "671a359047692d2c579deec5",
        "petType_id": [
            "671a359047692d2c579deebd"
        ],
        "discount": 0,
        "__v": 0,
        "createdAt": "2024-10-24T11:54:56.845Z",
        "updatedAt": "2024-10-28T12:03:12.445Z",
        "discountEndDate": "2024-10-28T14:00:00.000Z",
        "discountStartDate": "2024-10-28T14:00:00.000Z"
    },
    {
        "_id": "671a359047692d2c579deed6",
        "name": "Cat Toy",
        "description": "Interactive toy for cats to keep them engaged.",
        "image": {
            "url": "https://m.media-amazon.com/images/I/51jgvh57TFL.jpg",
            "alt": "Cat Toy Image",
            "_id": "671f7dbf411b6032729dfebc"
        },
        "price": 30,
        "stock": 75,
        "category_id": "671a359047692d2c579deec7",
        "petType_id": [
            "671a359047692d2c579deebe"
        ],
        "discount": 0,
        "__v": 0,
        "createdAt": "2024-10-24T11:54:56.845Z",
        "updatedAt": "2024-10-28T12:04:15.997Z",
        "discountEndDate": "2024-10-28T14:00:00.000Z",
        "discountStartDate": "2024-10-28T14:00:00.000Z"
    },
    {
        "_id": "671a359047692d2c579deed8",
        "name": "Fish Tank",
        "description": "A large tank suitable for various fish species.",
        "image": {
            "url": "https://i5.walmartimages.com/seo/Aqua-Culture-10-Gallon-Glass-Aquarium-Starter-Kit_e6976bf3-a974-425a-b72f-061889abea0c.a6d5ccb879cd72e05e521edb53000114.jpeg",
            "alt": "Fish Tank Image",
            "_id": "671f7def411b6032729dfebe"
        },
        "price": 200,
        "stock": 20,
        "category_id": "671a359047692d2c579deec8",
        "petType_id": [
            "671a359047692d2c579deec0"
        ],
        "discount": 0,
        "__v": 0,
        "createdAt": "2024-10-24T11:54:56.845Z",
        "updatedAt": "2024-10-28T12:05:03.649Z",
        "discountEndDate": "2024-10-28T14:00:00.000Z",
        "discountStartDate": "2024-10-28T14:00:00.000Z"
    }
]

export default function ProductsPage() {
  return (
    <Grid2 container spacing={2} mx={3}>
      {products.map((product) => (
        <Grid2 key={product._id} display='inline-flex' size={{xs: 12, sm: 6, md: 4, lg: 1.5}}>
          <CardComponent product={product}/>
        </Grid2>
      ))}
    </Grid2>
  )
}
