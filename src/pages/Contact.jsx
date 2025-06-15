import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Bookshelf || Contact</title>
      </Helmet>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary primary mb-10">
        You can contact us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-xs md:text-sm lg:text-base text-base-content italic">
            Have a question, suggestion, or just want to say hi? Feel free to
            reach out to us! We're here to help book lovers like you organize,
            review, and share their reading journey.
          </p>
        <div className="text-base-content space-y-1 text-[8px] md:text-[10px] lg:text-sm">
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
        </div>

        {/* Contact Form */}
        <form onSubmit={(e)=>{
          e.preventDefault();
          Swal.fire({
            title: 'Thank you!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          e.target.reset();

        }} className="space-y-4 bg-base-100 p-6 rounded-lg shadow-md">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your name"
                required
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
                required
            />
          </div>
          <div>
            <label className="block font-medium">Message</label>
            <textarea
              rows="4"
              className="textarea textarea-bordered w-full"
              placeholder="Write your message here"
                required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
