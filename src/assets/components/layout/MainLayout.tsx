import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [isActive, setIsActive] = useState(false);

  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <section className={isActive ? "main-layout active" : "main-layout"}>
      <Sidebar setIsActive={setIsActive} />
      <Outlet />
    </section>
  );
};

export default MainLayout;