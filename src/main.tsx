import "./index.css";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { router } from "./router";
import Providers from "./components/providers";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <Toaster visibleToasts={10} />
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
);
