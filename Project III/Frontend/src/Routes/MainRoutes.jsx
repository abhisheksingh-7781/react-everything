import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProducts from "./../pages/Admin/CreateProducts";
import ProductDatils from "../pages/Admin/ProductDetails";
import Userprofile from "../pages/User/Userprofile";
import NotFound from "../PageNotFound";
import AuthWrapper from "./AuthWrapper";
import Cart from './../pages/Cart';

const MainRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={ <Products /> } />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
            <ProductDatils />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProducts />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <AuthWrapper>
            <Userprofile />
          </AuthWrapper>
        }
      />
        <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
