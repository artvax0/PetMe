![Logo](https://github.com/user-attachments/assets/2e63cb0f-5ed0-45ae-809e-e02a7bb95beb)
# PetMe

PetMe is an e-commerce project for pet related items and care using React.js, Node.js, and MongoDB.  

Review this document thoroughly and the documentation written in Postman in-order to get the optimal and expected result from this repository.  

This repository is educational and was made as part of my Fullstack Web Development course in HackerU's (ThriveDX) online course's assignment.  

This project is protected by copyright law and cannot be used outside the purpose of examining this assignment. Any of my code, illustration, endpoints, idea, name, or brand- made or changed without my permission will be claimed under my name and will be followed up in a lawful action.  

This project is using assets created by [Kwismass](https://cara.app/kwis),
all assets, including but not limited to text, images, designs, code, and other media, used on this website are the intellectual property of their respective creators and are licensed exclusively for use within this project. These assets may not be reproduced, redistributed, or used for any other purpose without prior written permission from the owner. Unauthorized use, including for personal, educational, or commercial purposes outside of this project, is strictly prohibited.  

This project is using assets from [PetSmart](https://www.petsmart.com/) superstore market, these assets are used for the educational purpose of this project only.  

This project has **no transactions, or real-ordering system**.  
The purchasing form in this project is a simulation, a demo, a placeholder.  
Please **do not** fill in real information in the project's transaction form.  
Any information filled in this form is **not sent** to the server and database, and remains just as a simulation.  
This note acts as a final warning, and will not be held responsible for any actions and/or any transactions/withdrawals occuring on real credit card information.


## Screenshots  

Home Page - Light Mode  
![Home Page - Light Mode](https://github.com/user-attachments/assets/414768a4-8e69-4bbf-a916-348ff43fc3e4)  

Home Page - Dark Mode  
![Home Page - Dark Mode](https://github.com/user-attachments/assets/0a0b701d-b04d-45e2-9af1-1ab92b8230f0)  

Product Page  
![Product Page](https://github.com/user-attachments/assets/1739f6a1-540f-48e0-ab5a-a6e3aac29720)  

Employee Action - Update Product Stock  
![Update Product Stock](https://github.com/user-attachments/assets/f7b731b0-ca72-4ce1-a113-8f6786cc7732)  

Employee Action - Edit Product  
![Edit Product](https://github.com/user-attachments/assets/31f67c6a-b842-438d-839d-aa09a4fc9d5b)  

Employee Action - Search Orders  
![Search Orders](https://github.com/user-attachments/assets/c649a493-914c-43c7-96a0-f12224dc1578)  

Employee Action - Add Product  
![Add Product](https://github.com/user-attachments/assets/3d32054a-d9fe-4c19-9ad7-bb028b6a324d)  

User Actions Menu - Employees & Admins  
![User Actions Menu - Employees & Admins](https://github.com/user-attachments/assets/5cbf62aa-d38b-4974-bfdf-e53f607f479c)  

Admin Action - User Dashboard  
![User Dashboard](https://github.com/user-attachments/assets/c4fcdc1f-0972-467d-b6e0-3a305a7fb895)  

Home Page - Including Product Out of Stock  
![Home Page - Including Product Out of Stock](https://github.com/user-attachments/assets/f2bd7b10-a2d0-4f53-af0b-372aef66b98d)  

Product Page - Discounted Product  
![Product Page - Discounted Product](https://github.com/user-attachments/assets/6e797577-afe6-4edd-9426-cba5e9abd998)  

Order Page  
![Order Page](https://github.com/user-attachments/assets/1452660e-4fba-4b82-979f-1efc08225ed9)  

Shopping Cart  
![Shopping Cart](https://github.com/user-attachments/assets/147257de-b2b4-4519-95bb-37a9d125807c)  

Header (Home, Category Dropdown, Theme Mode (Light/Dark), Open Cart, User Menu)  
![Header (Home, Category Dropdown, Theme Mode (Light/Dark), Open Cart, User Menu)](https://github.com/user-attachments/assets/8a97540e-908f-4466-a813-f75bea586952)  

## Installation

Clone this repository  

Install PetMe with npm  

```bash
  npm i
```

### Environment Values

After all the libraries have been installed, create a `.env` file in the **backend folder.**   
The name of the environmental variables must remain the same for the code to work properly.  
The .env file will contain the following:  
* `ATLAS_CONT` - The connection string to Atlas's cloud, you may put a connection string to any cloud you want
* `LOCAL_CONT` - The connection string to a local database on your machine, I recommend you use mongodb compass, with the connection string **mongodb://127.0.0.1:27017/petMe** you may altername `petMe` with any name you'd like your database to be named  
* `PORT` - The port will be **8181** this can be changed only if in the endpoints URL you change the port accordingly.  
* `SECRET_KEY` - This is the second most important environment variable, this can be any value you want it to be. I recommend a **strong, random, unpredictable and unique long key no one knows**, or using a generator to generate a long and strong key for you - Beware: If you change the secret key again, all your currently in-use tokens will be invalid

### Launching the Client & Server

After creating and saving your .env file, start both the server and the client side in development mode to create initial data in your server and to obtain a link to visit the website.  

Note: This needs to be performed in the terminal in the **root folder** of the project, as it came.
```bash
  npm start
```

This command will launch both the frontend side and the backend side.  
At the first time running this command, the backend will create the following:

Three users:  
* An admin user  
* An employee user  
* A regular user  

In addition, it will create all 6 allowed pets in the database, 11 categories, 73 mock products, 3 carts; one for each user, and 3 "completed" orders; one for each user.  

Detailed information about each of the initial mock data created will be listed further down below.  

The website will be live under this [link](http://localhost:5173/).  

## Features

### Concurrently  

This project uses the concurrently library to run both the frontend and backend up together with one terminal script command.  

### Design and Responsiveness  

This project is using the [Material UI](https://mui.com/) library to create fluid and responsive user interface & icons.  

### CSS  

CSS in this project is handled and coded using the SASS library.  

### Navigation  

The project allows smooth navigation between all products, categories and pages.  
Users that don't have access or require the user to be logged on will be transfered to the home page, or the login page respectively.  

### Login System  

This project requires the user to signup and/or login to perform certain actions, like: adding products to your cart, buying products, etc.  

### Axios  

This project uses Axios to efficiently run requests and provide a header with the token of the user.  

### File Upload  

This project uses Filepond library and multer library to upload files from the frontend to the backend, and return a path to the static location of the file.

### REST API  

This project is using REST API for the following:
- Add (register), login, get user details, update users, and update user employment.
- Add, get cateogory details, and update categories.
- Add, and get pet details.
- Add, get product details, update product, update stock.
- Add, get, empty, and add products to users' carts.
- Add, get, and update order statuses. 
- Add, get, and update a file to and from the server. 
Only products can be deleted from the database using the endpoints. Users, categories, pets, carts and orders will remain saved in the database.  

### Logging  

This project uses chalk and Morgan logger in-addition to NodeJS's File System to log the endpoints, and create/change external logs upon encountering responses with status code 400 and above, and will order these external logs by day of the year.  

The */logs* folder is being ignored by **.gitignore** and will not upload to the github repository, this can be changed by removing it from the .gitignore file.  
Make sure nothing else is removed from said file.

### Password Encryption  

The users' passwords are encrypted and hashed with the bcryptjs library, and will **never return** from the endpoint response in the user's objects, using the lodash library.  

### CORS  

The backend is currently programmed to only accept requests sent by **http://localhost:5173** - this will be the local frontend project once completed.  

### Environments  

This project is using the config and dotenv libraries to separate and control the environments and config files.  

The configuration files hold the following information:  
- Token Generator - Which token generator the environment uses (Default: jwt)  
- Logger - Which logging method the environment uses (Default: morgan)  
- Validator - Which validator the environment uses (Default: joi)  
- Db - Which database the environment uses (Default: mongodb)  

There are only two environments:
- Development
- Production  

At the current moment and as configured by me, both environments share the same default configuration settings, the only difference is that the production environment will use the *ATLAS_CONT* connection string.  

### Tokens, Authentication and Authorization  

The server uses JSON Web Tokens (JWT) to create and decrypt tokens using a secret key (SECRET_KEY environment variable), most endpoints will require a valid token in the header of the request known as **auth-token** to make said requests.  

### Validations  

The project uses the joi library to validate the schemas and requests made by the user, to fit mongoose's schemas.  
Follow the validation rules provided by the endpoints' documentation to pass proper objects in the requests.  

### Static Files  

The server allows the use of a public static folder, inside the *images* folder. The project comes with said folder empty, and will fill up when employyee's upload files through the client side.  

### Initial Mock Data  

When the server is ran in development mode, the server will search all database documents, if any of the documents are empty- it will initialize said document with 3 premade models.  

*Note: All initial datas are mock-ups taken from [PetSmart](https://www.petsmart.com/), and may not be used or attempted to be used outside of the project.*

#### Users  

The first user is both an admin and an employee level user, and may be accessed with the following login credentials:  

> **Email:** yotta@terracotta.com  
>  
> **Password:** 1yotta!Terracotta  

The second user is an employee level user, and may be accessed with the following login credentials:  

> **Email:** lthompson@petme.com  
>  
> **Password:** L@thompson321  

The third user is a regular level user, and may be accessed with the following login credentials:  

> **Email:** peterjones@test.com  
>  
> **Password:** peterJones!123  

#### Categories  

The server will create 11 categories with the names and descriptions as such:  

> Food  
>  
>> Pet food products that offer balanced nutrition for animals, including dry, wet, and specialized diet options for various types of pets. This includes grain-free, organic, or veterinary-approved formulas.

> Treats  
>  
>> A range of tasty snacks designed for rewarding pets during training or as a treat. These include dental chews, training treats, rawhide bones, and species-specific snacks like catnip for cats or chew sticks for small mammals.  

> Toys  
>  
>> Interactive, durable, and entertaining products for pets that promote exercise and mental stimulation. Includes plush toys, squeaky toys, chew toys, laser pointers, and puzzle feeders tailored to different pet species..  

> Bedding & Furniture  
>  
>> Comfortable sleeping arrangements and furniture for pets, including beds, mats, hammocks, scratching posts, and pet-specific furniture like cat trees or small pet habitats.  

> Grooming Products  
>  
>> Essential care products to maintain pet hygiene, such as shampoos, brushes, nail clippers, ear cleaners, and deshedding tools. These products cater to different skin and fur types, including sensitive and medicated options.  

> Health & Wellness  
>  
>> Products aimed at supporting the overall health of pets, including vitamins, supplements, flea/tick prevention, dental care items, first aid kits, and specialized medications for common pet health issues.  

> Clothing & Accessories  
>  
>> Apparel and functional accessories designed for pets, such as sweaters, raincoats, booties, and harnesses. This category also includes decorative items like bandanas and seasonal costumes for pets.  

> Feeding & Watering Supplies  
>  
>> Bowls, dispensers, and feeders that help with portion control and hydration. Includes automatic feeders, water fountains, slow-feeder bowls, and portable travel bowls for pets.  

> Training & Behaviour Aids  
>  
>> Products that assist in training pets and modifying behavior. This includes training clickers, pee pads, litter boxes, calming collars, and gates or crates for managing pets indoors.  

> Travel & Outdoor Gear  
>  
>> Equipment and supplies that make traveling with pets safer and more comfortable, including carriers, car seat covers, pet strollers, life jackets, and outdoor gear like dog backpacks and outdoor kennels.  

> Pet Tech  
>  
>> Technology-focused products designed for pet care, including GPS trackers, activity monitors, smart collars, and interactive devices like treat dispensers and pet cameras that connect to apps.  

#### Pets  

There are only 6 allowed pets in the database:  
- Dogs  
- Cats  
- Birds  
- Fish  
- Rodents  
- Reptiles  

#### Other initial data  

The server will create 73 mock products, 3 carts and orders and link them together with the relevant IDs.  

### Products Stock, Discounts, Carts, and Orders  

The server will automatically create a cart for each other that registers, there can only be one unique cart for each user.  

A product can be on sale by providing a discount percentage to it, as well as a start and end date to the discount, additionally, products have limited stock which is provided when a product is created, or when an employee changes the stock amount of said product.  

Every time a cart object is being called, it will check all its products for:
- Is the product still in stock?  
- Is the product currently having a sale?  

If the product is in stock, it will flag the **isStocked** key in the cart as true, and will flag it as false otherwise. This can be used by the frontend to block the "Order" button.  

If the product is currently having a discount, it will adjust its total product price accordingly.  

When creating the order, the same check method is used on each of the produce.  

## 🛠 Skills
This project uses NodeJS, and REST API.  

**Dependencies:**  

Root:  
- concurrently: 9.1.0  

Frontend:  
- @emotion/react: 11.13.3  
- @emotion/styled: 11.13.0  
- @fontsource/roboto: 5.1.0  
- @mui/icons-material: 6.1.1  
- @mui/material: 6.1.7  
- axios: 1.7.7  
- filepond: 4.32.1  
- filepond-plugin-file-validate-type: 1.2.9  
- joi: 17.13.3  
- jwt-decode: 4.0.0  
- react: 18.3.1  
- react-dom: 18.3.1  
- react-filepond: 7.1.2  
- react-router-dom: 6.27.0  

Backend:  
- bcryptjs: 2.4.3  
- chalk: 5.3.0  
- config: 3.3.12  
- cors: 2.8.5  
- cross-env: 7.0.3  
- dotenv: 16.4.5  
- express: 4.21.0  
- joi: 17.13.3  
- jsonwebtoken: 9.0.2  
- lodash: 4.17.21  
- mongoose: 8.6.3  
- morgan: 1.10.0  
- multer: 1.4.5-lts.1  

## API Reference

#### The API can be referenced in the Postman documentation listed [here](https://documenter.getpostman.com/view/36563774/2sAY4rF5Km).  

Make sure to read the API reference thoroughly.  
