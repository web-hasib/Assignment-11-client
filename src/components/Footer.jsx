import React, { use } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Footer = () => {
  const {user} = use(AuthContext);
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
      <div className="">
       
         
             <ul className="flex gap-3">
               <li>
                 <NavLink to="/">Home</NavLink>
               </li>
               <li>
                 <NavLink to="/allBooks">allBooks</NavLink>
               </li>
               {user && (
                 <>
                   <li>
                     <NavLink to="/addBook">AddBook</NavLink>
                   </li>
                   <li>
                     <NavLink to="/myBooks">myBooks</NavLink>
                   </li>
         
                   <li>
                     <NavLink to="/profile">Profile</NavLink>
                   </li>
                 </>
               )}
               <li>
                 <NavLink to="/about">About</NavLink>
               </li>
               
               <li>
                 <NavLink to="/contact">Contact</NavLink>
               </li>
         
             </ul>
         
      
      </div>
      {/* Contact Info */}
      
      <div className="text-base-content text-[8px] md:text-[10px] lg:text-sm">
                    <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-blue-600" />
                  <span>+880 1234 567 890</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-blue-600" />
                  <span>support@virtualbookshelf.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span>Natore , Bangladesh</span>
                </div>
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
