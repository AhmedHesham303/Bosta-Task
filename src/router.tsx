import { Navigate, Outlet, createBrowserRouter } from "react-router";
import NotFound from "./pages/NotFound";
import CreateProduct from "./pages/product/CreateProduct";
import Cart from "./pages/cart/cart";
import WithAuthLayout from "./components/HOCs/WithAuthLayout";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ProductDetails from "./pages/product/productDetails";
import ProductListing from "./pages/product/ProductListing";
import UnAuthLayout from "./components/layout/UnAuthLayout";

export const router = createBrowserRouter([
  {
    element: <UnAuthLayout />,
    children: [
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
    element: (
      <WithAuthLayout>
        <Outlet />
      </WithAuthLayout>
    ),
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
