import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaBookOpen, FaFeatherAlt, FaScroll, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router";

const categories = [
  {
    id: 1,
    name: "Fiction",
    icon: FaBookOpen,
    description: "Explore imaginative and creative stories.",
    color: "bg-indigo-200/60 hover:bg-indigo-300/60",
  },
  {
    id: 2,
    name: "Non-Fiction",
    icon: FaFeatherAlt,
    description: "Learn from real experiences and knowledge.",
    color: "bg-green-200/60 hover:bg-green-300/60",
  },
  {
    id: 3,
    name: "Fantasy",
    icon: FaScroll,
    description: "Dive into magical worlds and epic tales.",
    color: "bg-purple-200/60 hover:bg-purple-300/60",
  },
  {
    id: 4,
    name: "Finance",
    icon: FaDollarSign,
    description: "Understand money management - investing.",
    color: "bg-yellow-200/60 hover:bg-yellow-300/60",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FeaturedCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  return (
    <section className="py-16 bg-base-100" ref={ref}>
      <div className=" mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 primary text-primary py-5">
        Featured Categories
        </h2>
        <p className="text-lg mb-8 text-primary-content italic">
          Browse by your favorite genres and discover more.
        </p>

       
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 "
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {categories.map((cat, index) => (
            <Link  key={index} to={`/allBooks#${cat.name}`}>
            <motion.div
             
              className={`h-full flex flex-col justify-between p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer ${cat.color}`}
              variants={itemVariants}
            >
              <div className="text-5xl mb-3 flex items-center text-base-400 justify-center p-3 ">
                <cat.icon />
              </div>
              <div className="text-2xl font-semibold text-primary-content primary mb-2">
                {cat.name}
              </div>
              <p className="text-xs text-base-content">{cat.description}</p>
            </motion.div>
            </Link>
          ))}
        </motion.div>
       

      </div>
    </section>
  );
};

export default FeaturedCategories;
