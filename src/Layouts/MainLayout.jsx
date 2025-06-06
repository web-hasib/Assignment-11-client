import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Outlet } from "react-router";
import Loading from "../pages/Loading";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Empty from "../pages/Empty";

const MainLayout = () => {
  const { user } = use(AuthContext);
  console.log("user from mainlayout ", user);
  return (
    <div>
      {/* Hello from main layout */}
      {/* <nav>navbar</nav> */}
      <Outlet></Outlet>
      {/* <footer>footer</footer> */}
      {/* <Loading></Loading> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Error></Error> */}
      <Empty></Empty>

    </div>
  );
};

export default MainLayout;
