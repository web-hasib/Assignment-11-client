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

const MainLayout = () => {
  const { user } = use(AuthContext);
  console.log("user from mainlayout ", user);
  return (
    <div>
      <h1 className="primary">Hello from main layout</h1>
     
        <NavBar></NavBar>
     
      <main className="border mx-auto border-black max-w-7xl"> 

      <Outlet></Outlet>
      <HomeBanner></HomeBanner>
      
      <Loading></Loading>
      <Register></Register>
      <Login></Login>
      <Error></Error>
      <Empty></Empty>
      </main>
      <footer>footer</footer>

    </div>
  );
};

export default MainLayout;
