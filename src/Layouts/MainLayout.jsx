import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Outlet } from "react-router";
import Loading from "../pages/Loading";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Empty from "../pages/Empty";
import NavBar from "../components/NavBar";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";


const MainLayout = () => {
  const { user,loading } = use(AuthContext);
  // console.log("user from mainlayout ", user);
  return (
    <div>
      
     
        <NavBar></NavBar>
     
     <main className="min-h-[calc(100vh-340px)] max-w-7xl mx-auto">
          {loading ? <Loading /> : <Outlet></Outlet>}
        </main>
      <footer><Footer></Footer></footer>

    </div>
  );
};

export default MainLayout;
