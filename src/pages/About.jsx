import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaBook,
  FaChartPie,
  FaStar,
  FaUser,
  FaTools,
} from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.h1
        className="text-lg md:text-4xl font-bold text-center primary text-primary mb-8 flex items-center justify-center gap-3"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <FaBook className="text-primary" /> About Virtual Bookshelf
      </motion.h1>

      {/* Project Description */}
      <motion.div
        className="bg-base-100 shadow-lg p-8 rounded-2xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-primary-content text-xs md:text-sm lg:text-lg italic">
          <span className="text-accent font-bold mr-2">Virtual Bookshelf</span> is a full-stack web app where users can manage
          their reading life – from adding books to reviewing them. The app also includes analytics to visualize reading habits.
        </p>

        <p className="text-primary-content text-xs md:text-sm lg:text-lg italic">
          Built using modern frontend and backend technologies. It demonstrates secure authentication, protected routes, real-time updates, and rich animations using React ecosystem tools.
        </p>

        {/* Features Summary */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <FaBook size={30} />,
              title: "Smart Cataloging",
              desc: "Users can add, update, or delete books with metadata like cover, title, pages, author, etc.",
            },
            {
              icon: <FaStar size={30} />,
              title: "Interactive Reviews",
              desc: "Users can post reviews, see others’ opinions, and upvote their favorite books.",
            },
            {
              icon: <FaChartPie size={30} />,
              title: "Analytics & Charts",
              desc: "Profile page shows pie charts of book counts by category using Recharts.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-base-200 rounded-xl shadow text-center space-y-3"
            >
              <div className="flex justify-center text-secondary-content mb-2">
                {feature.icon}
              </div>
              <h4 className=" font-semibold md:text-xl lg:text-2xl text-primary">{feature.title}</h4>
              <p className="text-secondary-content text-xs md:text-sm lg:text-lg italic">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Full Functionality List */}
        <div className="bg-base-200 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-sm md:text-xl lg:text-2xl font-semibold text-primary">📘 Features Implemented</h3>
          <ul className="list-disc pl-6 space-y-2 text-primary-content text-xs md:text-sm">
            <li>Book management: Add, edit, delete, and browse books</li>
            <li>Review system with upvote functionality</li>
            <li>Track reading status: Read, Currently Reading, Plan to Read</li>
            <li>Top books display (based on upvotes)</li>
            <li>Reading analytics chart in profile (Recharts Pie Chart)</li>
            <li>Authentication: Google & Email/Password (Firebase)</li>
            <li>Private routes and JWT protection for secured pages</li>
            <li>Responsive UI with Tailwind CSS, DaisyUI, and Framer Motion</li>
            <li>All books page with search and category filter</li>
            <li>Book Details page with full info, status update & review posting</li>
            <li>My Added Books section to manage user-added books</li>
            <li>Toast alerts and confirmation modals via SweetAlert2</li>
          </ul>
        </div>

        {/*librarys Section */}
        <div className="bg-base-200 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-sm md:text-xl lg:text-2xl font-semibold text-primary flex items-center gap-2">
            <FaTools /> Tech Stack & Libraries
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-primary-content text-xs md:text-sm list-disc list-inside">
            <ul className="space-y-1">
              <li>React</li>
              <li>React DOM</li>
              <li>React Router</li>
              <li>React Helmet</li>
              <li>React Tabs</li>
              <li>React Icons</li>
            </ul>
            <ul className="space-y-1">
              <li>Tailwind CSS</li>
              <li>DaisyUI</li>
              <li>Framer Motion</li>
              <li>React Awesome Reveal</li>
              <li>Lottie React</li>
              <li>Recharts</li>
            </ul>
            <ul className="space-y-1">
              <li>Firebase Auth</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Axios</li>
              <li>SweetAlert2</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Developer Info */}
      <motion.div
        className="mt-16 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <img
          src="https://simgbb.com/avatar/kgt9bySRq2QF.jpg"
          alt="Hasibul Islam"
          className="w-40 h-40 rounded-full border-4 border-primary shadow-lg"
        />
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <FaUser /> Developer Info
          </h2>
          <p className="text-primary-content">
            I'm <span className="font-semibold text-accent-content text-xl">Hasibul Islam</span>, a full-stack web developer focused on creating meaningful and user-friendly applications.
            This project reflects my passion for clean code and modern UI/UX design.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-2xl mt-4 text-primary">
            <a href="https://www.facebook.com/web.hasibul/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://github.com/web-hasib" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/-hasibul-islam-/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="mailto:hasibulislamofficial@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
