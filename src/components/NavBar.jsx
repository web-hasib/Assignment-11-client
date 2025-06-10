import React, { use, useState } from "react";
import { CiLight } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
const links = (
  <>
    <li>
      <a>Item 1</a>
    </li>
   
    <li>
      <a>Item 3</a>
    </li>
  </>
);

const NavBar = () => {
  const {user}= use(AuthContext);
  const [theme, setTheme]=useState(false);
  const handleLogOut = () => {
    localStorage.removeItem("access-token");
    window.location.reload();
  };
  return (
    <div className="bg-base-300/50 sticky top-0 z-1 shadow-sm ">
      <div className="navbar m-0 p-0  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl primary "><img className="w-25 h-30 mb-10
          " src="https://i.ibb.co/KzFRxwyj/logo-removebg-preview-1.png" alt="" /> BookShelf</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
           <input
          type='checkbox'
          value='cupcake'
          className='toggle theme-controller'
        />
           {/* Theme Button */}
        {/* <button onClick={()=>{
          setTheme(!theme)
        }} className="btn  theme-controller rounded-full">
          {theme === "light" ? (
            <LuSunMoon size={20} color="black" />
          ) : (
            <CiLight size={20} color="white" />
          )}
        </button> */}
        
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info"
          >
            Login
          </Link>
        )}
          {/* <a className=" btn btn-soft border-blue-300 rounded-full px-7 hover:text-white btn-info">Button</a> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
