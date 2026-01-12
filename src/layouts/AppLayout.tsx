import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useAuthBootstrap } from "@/features/authentication/hooks/useAuthBootstrap";

function AppLayout() {
  useAuthBootstrap();
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
