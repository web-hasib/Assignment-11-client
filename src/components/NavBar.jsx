import React, { use, useEffect, useState } from "react";


import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import { BsSun, BsMoon } from "react-icons/bs";
import { AuthContext } from "../Provider/AuthProvider";
const links = (
  <>
    <li>
     <NavLink to='/addBook'>AddBook</NavLink>
    </li>
    <li>
     <NavLink to='/myBooks'>myBooks</NavLink>
    </li>
    <li>
     <NavLink to='/about'>About</NavLink>
    </li>

    <li>
      <a>Item 3</a>
    </li>
  </>
);

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setIsDark(currentTheme === "cupcake");
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme || "black"
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "black" : "cupcake";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogOut = () => {
    // console.log('user trying to log out');
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Log out successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  };
  return (
    <div className="bg-base-300/50 sticky top-0 z-1 shadow-sm ">
      <div className="navbar m-0 p-0  max-w-7xl mx-auto">
        <div className="navbar-start">
          <a
            href="/"
            className="btn shadow-none bg-transparent outline-0 border-0 text-lg md:text-2xl primary "
          >
            <img
              className="w-16 h-16 mb-5 md:w-25 md:h-30 md:mb-10
          "
              src="https://i.ibb.co/KzFRxwyj/logo-removebg-preview-1.png"
              alt=""
            />{" "}
            BookShelf
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="hidden lg:flex navbar-end items-center gap-2">
          <button onClick={toggleTheme} className="text-xl btn btn-ghost">
            {isDark ? <BsSun /> : <BsMoon />}
          </button>

          {user?.photoURL && (
            <Link to="/profile" className="relative group inline-block">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={user.photoURL}
                alt=""
              />
              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                {user.displayName}
              </div>
            </Link>
          )}

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
        </div>
        {/* dropdown  */}
        <div className="dropdown lg:hidden navbar-end dropdown-bottom dropdown-end">
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
            <div className="flex items-center justify-between mb-4">
              {user?.photoURL && (
                <Link to="/profile" className="relative group inline-block">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={user.photoURL}
                    alt=""
                  />
                  <div className="primary">{user.displayName}</div>
                </Link>
              )}
              {/* <input
                type="checkbox"
                value="cupcake"
                className="toggle theme-controller"
              /> */}
              <button onClick={toggleTheme} className="text-xl btn btn-ghost">
                {isDark ? <BsSun /> : <BsMoon />}
              </button>
            </div>
            {links}
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
