import chalk from "chalk"
import Cart from "../models/collections/Cart.js"
import Category from "../models/collections/Category.js"
import Order from "../models/collections/Order.js"
import Pet from "../models/collections/Pets.js"
import Product from "../models/collections/Product.js"
import User from "../models/collections/Users.js"
import { initialCarts, initialCategories, initialOrders, initialPets, initialProducts, initialUsers } from "../utils/initialData.js"

const initializeDatabase = async () => {
  try {
    console.log(chalk.bgGreen('Search database documents'));
    // Check if collections are empty and insert initial data if they are
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      await User.insertMany(initialUsers);
      console.log(chalk.green('Inserted mock user data'));
    }

    const petCount = await Pet.countDocuments();
    if (petCount === 0) {
      await Pet.insertMany(initialPets);
      console.log(chalk.green('Inserted mock pet data'));
    }

    const categoryCount = await Category.countDocuments();
    if (categoryCount === 0) {
      await Category.insertMany(initialCategories);
      console.log(chalk.green('Inserted mock category data'));
    }

    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      // Get category and pet references
      const categories = await Category.find();
      const pets = await Pet.find();

      const productsWithLinks = initialProducts.map(product => {
        return {
          ...product,
          category_id: categories.find(c => c.name == product.category_id)._id,
          petType_id: product.petType_id.map(pt => pets.find(p => p.name === pt)._id),
        };
      });

      await Product.insertMany(productsWithLinks);
      console.log(chalk.green('Inserted mock product data'));
    }

    const cartCount = await Cart.countDocuments();
    if (cartCount === 0) {
      const users = await User.find();
      const products = await Product.find();
      const cartsWithLinks = initialCarts.map(cart => {
        return {
          ...cart,
          user_id: users[cart.user_id]._id, // ensure to map user_id correctly
          products: cart.products.map(product => ({
            ...product,
            product_id: products.find(p => p.name === product.product_id)._id, // ensure product_id is linked
            price: products.find(p => p.name === product.product_id).price * product.quantity
          })),
        };
      });

      await Cart.insertMany(cartsWithLinks);
      console.log(chalk.green('Inserted mock cart data'));
    }

    const orderCount = await Order.countDocuments();
    if (orderCount === 0) {
      const users = await User.find();
      const products = await Product.find();
      let sum = 0;
      const ordersWithLinks = initialOrders.map(order => {

        const total = order.products.reduce((sum, product) => {
          const foundProduct = products.find(p => p.name === product.product_id);
          return sum + (foundProduct.price * product.quantity);
        }, 0);

        return {
          ...order,
          user_id: users[order.user_id]._id, // ensure to map user_id correctly
          products: order.products.map(product => ({
            ...product,
            product_id: products.find(p => p.name === product.product_id)._id, // ensure product_id is linked
            price: products.find(p => p.name === product.product_id).price * product.quantity
          })),
          address: users[order.user_id].address,
          total,
        };
      });
      await Order.insertMany(ordersWithLinks);
      const orders = await Order.find();
      for (let i = 0; i < 3; i++) {
        await User.findByIdAndUpdate(ordersWithLinks[i].user_id, { order_ids: orders[i]._id });
      }
      console.log(chalk.green('Inserted mock order data'));
      console.log(chalk.green('Updated mock user data order ids'));
    }
    console.log(chalk.bgGreen('Database documents loaded'));
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

export default initializeDatabase;