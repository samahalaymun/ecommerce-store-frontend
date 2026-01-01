import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryProvider } from "@/lib/reactQuery/QueryProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router.tsx";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </StrictMode>
);
