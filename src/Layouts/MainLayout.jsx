import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Outlet } from "react-router";
import Loading from "../pages/Loading";

import NavBar from "../components/NavBar";

import Footer from "../components/Footer";

const MainLayout = () => {
  const { loading } = use(AuthContext);
  // console.log("user from mainlayout ", user);
  return (
    <div>
      <NavBar></NavBar>

      <main className="min-h-[calc(100vh-340px)] ">
        {loading ? <Loading /> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
