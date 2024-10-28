import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './routesModel'
import ProductsPage from '../pages/ProductsPage'
import Page404 from '../pages/Page404'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<ProductsPage/>}/>
      <Route path={ROUTES.ABOUT} element={<ProductsPage/>}/> {/* Temp component */}
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage/>}/> {/* Temp component */}
      <Route path={ROUTES.LOGIN} element={<ProductsPage/>}/> {/* Temp component */}
      <Route path={ROUTES.SIGNUP} element={<ProductsPage/>}/> {/* Temp component */}
      <Route path='*' element={<Page404/>}/>
    </Routes>
  )
}