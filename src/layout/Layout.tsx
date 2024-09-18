import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";


const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;