import Navbar from "./Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer/Footer";

function PageContainer() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageContainer;
