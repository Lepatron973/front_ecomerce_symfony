import {
  createBrowserRouter
} from "react-router-dom";

import Home from '../pages/Home';
import Products from "../pages/Products";
import Login from "../pages/Login";
import Inscription from "../pages/Inscription";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import AddProduct from "../pages/AddProduct";
import AccessDenied from "../pages/AccessDenied";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/products",
      element: <Products />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Inscription />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/admin/addProduct",
      element: <AddProduct />
    },
    {
      path: "/denied",
      element: <AccessDenied />
    },

]);