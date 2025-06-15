import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaBook, FaStar, FaUsers, FaSmile, FaGlobe } from "react-icons/fa";

const stats = [
  {
    number: 1200,
    label: "Active Books",
    icon: FaBook,
    color: "bg-blue-200/50 primary hover:bg-blue-300/40 hover:scale-105 hover:shadow-xl",
  },
  {
    number: 350,
    label: "Successful Reviews",
    icon: FaStar,
    color: "bg-yellow-200/50 primary hover:bg-yellow-300/40 hover:scale-105 hover:shadow-xl",
  },
  {
    number: 500,
    label: "Book Enthusiasts",
    icon: FaUsers,
    color: "bg-green-200/50 primary hover:bg-green-300/40 hover:scale-105 hover:shadow-xl",
  },
  {
    number: 15000,
    label: "Happy Readers",
    icon: FaSmile,
    color: "bg-purple-200/50 primary hover:bg-purple-300/40 hover:scale-105 hover:shadow-xl",
  },
  {
    number: 7500,
    label: "Community Members",
    icon: FaGlobe,
    color: "bg-red-200/50 primary hover:bg-red-300/40 hover:scale-105 hover:shadow-xl",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);


  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);

    
      stats.forEach((stat, index) => {
        let start = 0;
        const duration = 2000;
        const increment = stat.number / (duration / 16);
        const animate = () => {
          start += increment;
          if (start < stat.number) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
            requestAnimationFrame(animate);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = stat.number;
              return newCounts;
            });
          }
        };
        animate();
      });
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="py-16 bg-base-100" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary primary py-5">
          Why Choose Virtual Bookshelf?
        </h2>
        <p className="text-lg mb-8 text-primary-content italic">
          The all-in-one platform for managing your reading journey.
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${stat.color} transition-all duration-300`}
              variants={itemVariants}
            >
              <div className="text-4xl mb-2 flex items-center justify-center p-3 text-base-500">
                <stat.icon />
              </div>
              <div className="text-3xl font-bold text-secondary-content mb-3">
                {counts[index].toLocaleString()}
              </div>
              <p className="text-sm text-base-content">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
