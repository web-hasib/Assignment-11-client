import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = ({ theme }) => {
  return (
    <footer
     
      className="footer footer-horizontal footer-center  text-base-content rounded pt-10 pb-5 border-t border-primary border-dashed"
    >
      <div className="flex items-center gap-3">
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
      <div className="flex gap-3">
        <NavLink
          to="/"
          className="text-xs font-semibold hover:text-blue-500"
        >
          Home
        </NavLink>
      
      </div>
      {/* Contact Info */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          📧 Email:{" "}
          <a className="hover:underline text-blue-500">jrweb.hasib@gmail.com</a>
        </p>
        <p className="text-sm text-gray-600">
          📞 Phone:{" "}
          <a className="hover:underline text-blue-500">+880 1234 567 890</a>
        </p>
      </div>
      <nav>
          {/* Terms + Links */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <div className="flex items-center text-xs gap-2 flex-col md:flex-row">
            <a href="#" className="block hover:underline">Terms & Conditions</a>
          <a href="#" className="block hover:underline">Privacy Policy</a>
          <a href="#" className="block hover:underline">FAQs</a>
          <a href="#" className="block hover:underline">Support</a>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex justify-center md:justify-end space-x-4 text-xl">
          <a
            href="https://www.facebook.com/web.hasibul/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/Hasibul9285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/__md_hasibul_islam__/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/-hasibul-islam-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
      <aside className="w-full">
        <p className="text-xs font-thin italic text-gray-400">
          Copyright © {new Date().getFullYear()} - All right reserved by Hasib
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
