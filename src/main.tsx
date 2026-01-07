import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryProvider } from "@/lib/reactQuery/QueryProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router.tsx";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ThemeProvider } from "next-themes";

import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <QueryProvider>
        <NuqsAdapter>
          <RouterProvider router={router} />
        </NuqsAdapter>
      </QueryProvider>
    </ThemeProvider>
  </StrictMode>
);
