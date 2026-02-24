import { Navigate, createBrowserRouter } from "react-router";
import NotFound from "./pages/NotFound";
import CreateProduct from "./pages/product/CreateProduct";
import Cart from "./pages/cart/cart";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ProductDetails from "./pages/product/productDetails";
import ProductListing from "./pages/product/ProductListing";
import UnAuthLayout from "./components/layout/UnAuthLayout";
import AuthLayout from "./components/layout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products-listing" replace />,
  },
  {
    index: true,
    path: "products-listing",
    element: <ProductListing />,
  },
  {
    path: "products/:id",
    element: <ProductDetails />,
  },
  {
    element: <UnAuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "products/create",
        element: <CreateProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
