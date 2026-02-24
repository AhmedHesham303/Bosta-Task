import { createBrowserRouter, Navigate } from "react-router";

// ─── Layout ───────────────────────────────────────────────────────────────────
import Layout from "@/components/layout/Layout";

// ─── Pages ────────────────────────────────────────────────────────────────────
import ProductListingPage from "@/pages/ProductListingPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import CreateProductPage from "@/pages/CreateProductPage";
import CartPage from "@/pages/CartPage";
import LoginPage from "@/pages/LoginPage";

// ─── Guards ───────────────────────────────────────────────────────────────────
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// ─── Router ───────────────────────────────────────────────────────────────────

export const router = createBrowserRouter([
  {
    // All app pages share the Layout wrapper (Header + Footer)
    path: "/",
    element: <Layout />,
    children: [
      // ── Public routes ──────────────────────────────────────────────────────
      {
        index: true,
        element: <ProductListingPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },

      // ── Protected routes (require login) ──────────────────────────────────
      {
        element: <ProtectedRoute />,   // wraps children, redirects if not authed
        children: [
          {
            path: "products/create",
            element: <CreateProductPage />,
          },
          {
            path: "cart",
            element: <CartPage />,
          },
        ],
      },

      // ── Fallback ──────────────────────────────────────────────────────────
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
   {
    path: "*",
    element: <NotFound />,
  },
]);