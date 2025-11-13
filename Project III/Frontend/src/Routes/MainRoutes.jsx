import { Route,  Routes } from 'react-router-dom'  
import Home from '../pages/Home' 
import Products from '../pages/Products' 
import Login from '../pages/Login' 
import Register from '../pages/Register' 
import CreateProducts from './../pages/Admin/CreateProducts' 
import ProductDatils from '../pages/Admin/ProductDetails'
      
const MainRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/products' element={<Products/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/product/:id' element={<ProductDatils/>} />
       <Route path='/admin/create-product' element={<CreateProducts/>} />

    </Routes>
  )
}

export default MainRoutes


