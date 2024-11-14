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
import OrdersPage from '../pages/OrdersPage'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<ProductsPage />} />
      <Route path={ROUTES.ABOUT} element={<ProductsPage />} /> {/* Temp component */}
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} /> {/* Temp component */}
      <Route path={ROUTES.FOOD} element={<FoodsPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.PRODUCT + '/:id'} element={<ProductPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.ORDER} element={<OrderPage />} />
      <Route path={ROUTES.USER_SETTINGS} element={<AccountSettingsPage />} />
      <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}