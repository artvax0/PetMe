import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './routesModel'
import ProductsPage from '../pages/products/ProductsPage'
import AboutPage from '../pages/root/AboutPage'
import FoodsPage from '../pages/categories/FoodsPage'
import TreatsPage from '../pages/categories/TreatsPage'
import ToysPage from '../pages/categories/ToysPage'
import BeddingsPage from '../pages/categories/BeddingsPage'
import GroomingPage from '../pages/categories/GroomingPage'
import ClothingPage from '../pages/categories/ClothingPage'
import HealthPage from '../pages/categories/HealthPage'
import FeedingPage from '../pages/categories/FeedingPage'
import TrainingPage from '../pages/categories/TrainingPage'
import TravelPage from '../pages/categories/TravelPage'
import TechPage from '../pages/categories/TechPage'
import LoginPage from '../pages/user/LoginPage'
import ProductPage from '../pages/products/ProductPage'
import SignupPage from '../pages/user/SignupPage'
import OrderPage from '../pages/orders/OrderPage'
import OrdersPage from '../pages/orders/OrdersPage'
import OrderDetailsPage from '../pages/orders/OrderDetailsPage'
import AccountSettingsPage from '../pages/user/AccountSettingsPage'
import UserOrdersPage from '../pages/orders/UserOrdersPage'
import AddProductPage from '../pages/employee/AddProductPage'
import EditProductPage from '../pages/employee/EditProductPage'
import Dashboard from '../pages/admin/Dashboard'
import Page404 from '../pages/root/Page404'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<ProductsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
      <Route path={ROUTES.FOOD} element={<FoodsPage />} />
      <Route path={ROUTES.TREATS} element={<TreatsPage />} />
      <Route path={ROUTES.TOYS} element={<ToysPage />} />
      <Route path={ROUTES.BEDDINGS_FURNITURE} element={<BeddingsPage />} />
      <Route path={ROUTES.GROOMING} element={<GroomingPage />} />
      <Route path={ROUTES.CLOTHING} element={<ClothingPage />} />
      <Route path={ROUTES.HEALTH} element={<HealthPage />} />
      <Route path={ROUTES.FEEDING} element={<FeedingPage />} />
      <Route path={ROUTES.TRAINING} element={<TrainingPage />} />
      <Route path={ROUTES.TRAVEL} element={<TravelPage />} />
      <Route path={ROUTES.TECH} element={<TechPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.PRODUCT + '/:id'} element={<ProductPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.ORDER} element={<OrderPage />} />
      <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
      <Route path={ROUTES.ORDER + '/:id'} element={<OrderDetailsPage />} />
      <Route path={ROUTES.USER_SETTINGS} element={<AccountSettingsPage />} />
      <Route path={ROUTES.USER_ORDERS} element={<UserOrdersPage />} />
      <Route path={ROUTES.ADD_PRODUCT} element={<AddProductPage />} />
      <Route path={ROUTES.EDIT_RODUCT + '/:id'} element={<EditProductPage />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}