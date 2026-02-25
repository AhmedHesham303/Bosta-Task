import { Navigate, createBrowserRouter } from "react-router";
import NotFound from "./pages/NotFound";
import CreateProduct from "./pages/create/CreateProduct";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ProductListing from "./pages/product/ProductListing";
import UnAuthLayout from "./components/layout/UnAuthLayout";
import AuthLayout from "./components/layout/AuthLayout";
import ProductDetails from "./pages/product/ProductDetails";
import Cart from "./pages/cart/Cart";
import MainLayout from "./components/layout/MainLayout";
import CenteredLayout from "./components/layout/CenteredLayout";
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/products-listing" replace />,
      },
      {
        path: "products-listing",
        element: <ProductListing />,
      },

      // Everything below gets centered
      {
        element: <CenteredLayout />,
        children: [
          {
            path: "products/:id",
            element: <ProductDetails />,
          },

          {
            element: <UnAuthLayout />,
            children: [
              { path: "login", element: <Login /> },
              { path: "signup", element: <Signup /> },
            ],
          },
          {
            element: <AuthLayout />,
            children: [
              { path: "products/create", element: <CreateProduct /> },
              { path: "cart", element: <Cart /> },
            ],
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);
