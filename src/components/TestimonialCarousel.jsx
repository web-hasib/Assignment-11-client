import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import coate from "../assets/reviewQuote.png";

// Book Lovers Testimonials for Virtual Bookshelf
const testimonials = [
  {
    name: "Sadia Rahman",
    role: "Book Enthusiast",
    text: "Virtual Bookshelf has completely changed how I track my reading. The upvote system helps me find the best books quickly!",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Tanvir Hasan",
    role: "College Student",
    text: "I love the clean UI and the ability to manage my personal book collection. Adding reviews is super easy!",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Nusrat Jahan",
    role: "Freelance Writer",
    text: "The category-wise chart in the profile section is brilliant! Helps me see where I need to diversify my reading.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Imran Hossain",
    role: "Book Reviewer",
    text: "One review per book is a great feature. Keeps the review system clean and useful!",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Fatima Akter",
    role: "Reading Hobbyist",
    text: "I can track my reading progress and explore top books added by other users. Amazing platform for readers!",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Mahmudul Hasan",
    role: "Finance Blogger",
    text: "I finally found a place to organize my finance books and share my reviews with others!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Shahida Begum",
    role: "Fantasy Lover",
    text: "The category filters are very helpful! I can quickly jump to my favorite genre: Fantasy!",
    avatar: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Rashed Karim",
    role: "Non-Fiction Reader",
    text: "The book search is fast and accurate. I can easily find the non-fiction titles I love.",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Minara Sultana",
    role: "Daily Reader",
    text: "The mobile experience is excellent. I can add books and reviews anytime, anywhere!",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Fahim Chowdhury",
    role: "Tech Blogger",
    text: "The private routes are well-implemented. My personal book data feels secure and accessible only to me.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];


const BookReviewCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 text-center pt-28 relative overflow-hidden">
      {/* Section Header */}
      <div className="pb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary primary pb-4">
          Readers' Experiences
        </h2>
        <p className="mt-4 text-base-content italic text-primary-content max-w-2xl mx-auto">
          See what our community says about Virtual Bookshelf!
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="testimonial-swiper my-20"
        style={{ overflow: "visible" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`relative transition-all duration-500 rounded-3xl p-10 bg-white/90 shadow-xl mx-auto h-70 py-20
                  ${
                    isActive
                      ? "md:scale-[1.5] z-20 opacity-100"
                      : "md:scale-85 opacity-50 mt-4"
                  }`}
              >
                {/* Quote Icon */}
                <img
                  src={coate}
                  alt="quote"
                  className="w-8 absolute top-4 left-4 opacity-50"
                />

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-4">{testimonial.text}</p>

                {/* User Info */}
                <div className="flex items-center gap-4 justify-center mt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-teal-700">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookReviewCarousel;
