import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './routesModel'
import ProductsPage from '../pages/ProductsPage'
import Page404 from '../pages/Page404'
import FoodsPage from '../pages/FoodsPage'
import ProductPage from '../pages/ProductPage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import OrderPage from '../pages/OrderPage'
import AccountSettingsPage from '../pages/AccountSettingsPage'
import UserOrdersPage from '../pages/UserOrdersPage'
import OrdersPage from '../pages/OrdersPage'
import OrderDetailsPage from '../pages/OrderDetailsPage'
import AddProductPage from '../pages/AddProductPage'
import EditProductPage from '../pages/EditProductPage'
import Dashboard from '../pages/Dashboard'
import TreatsPage from '../pages/TreatsPage'
import ToysPage from '../pages/ToysPage'
import BeddingsPage from '../pages/BeddingsPage'
import GroomingPage from '../pages/GroomingPage'
import HealthPage from '../pages/HealthPage'
import ClothingPage from '../pages/ClothingPage'
import FeedingPage from '../pages/FeedingPage'
import TrainingPage from '../pages/TrainingPage'
import TravelPage from '../pages/TravelPage'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<ProductsPage />} />
      <Route path={ROUTES.ABOUT} element={<ProductsPage />} /> {/* Temp component */}
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