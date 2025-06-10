import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const slides = [
  {
    id: 1,
    title: "Welcome to Virtual Bookshelf",
    subtitle: "Track what you've read, plan what to read next!",
    image: "https://i.ibb.co/5W5FB98B/ashim-d-silva-P8g-La-J-PZL0-unsplash.jpg",
    lottie:
      "https://lottie.host/9865e3fb-0a8f-4e12-ac5d-dcef42d82a7f/j5WOp9AWLs.lottie",
  },
  {
    id: 2,
    title: "Organize Your Reading",
    subtitle: "Add reviews, upvote books, and explore trending reads.",
    image:
      "https://i.ibb.co/xqF1Nv1D/joyce-hankins-Coyk-Yn-Iun-Ug-unsplash.jpg",
    lottie:
      "https://lottie.host/5ff1c9f7-8274-4d55-b392-6910a10b05a8/MKMqMUa7Xt.lottie",
  },
  {
    id: 3,
    title: "Visualize Your Progress",
    subtitle: "Get a chart view of your book categories and statuses.",
    image: "https://i.ibb.co/kVQZCGtY/jason-leung-D4-Yrz-Swy-IEc-unsplash.jpg",
    lottie:
      "https://lottie.host/1aba2804-18e2-4979-913c-c19f1112ab99/dDOLpM3Qno.lottie",
  },
];

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-6 overflow-hidden  rounded-2xl shadow-lg h-auto md:h-72 lg:h-96">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, i) =>
            i === currentIndex && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full "
              >
                <div className="relative  w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 bg-black/60 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-8 gap-6 text-white">
                    {/* Left Text Section */}
                    <div className="flex-1 space-y-3 text-center md:text-left">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-3xl primary lg:text-5xl font-bold text-accent"
                      >
                        {slide.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-sm md:text-lg lg:text-xl text-gray-300 italic max-w-2xl"
                      >
                        {slide.subtitle}
                      </motion.p>
                    </div>

                    {/* Right Animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="w-[200px] md:w-[250px] lg:w-[400px]"
                    >
                      <DotLottieReact
                        src={slide.lottie}
                        loop
                        autoplay
                        style={{ width: "150%", height: "150%" }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full z-20"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full z-20"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default HomeBanner;
