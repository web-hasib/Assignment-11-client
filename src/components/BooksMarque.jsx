import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router'; // Correct import

const BooksMarque = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://virtual-bookshelf-server-five.vercel.app/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const duplicatedBooks = [...books, ...books];

  return (
    <div id="skills" className="flex flex-col items-center justify-center px-6 py-6">
      <motion.h2
        className="text-3xl md:text-4xl text-primary primary py-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Featured Books
      </motion.h2>

      {/* Make this wrapper relative and remove overflow-hidden */}
      <motion.div
        className="w-full max-w-7xl px-5 py-10 md:py-16 relative overflow-x-hidden overflow-y-visible" // 🔥 relative added, overflow-hidden removed
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <style>
          {`
          @keyframes scroll-x {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .marquee-content {
            display: flex;
            width: fit-content;
            animation: scroll-x 60s linear infinite;
          }

          .skill-card {
            min-width: 150px;
            margin: 0 10px;
            flex-shrink: 0;
            position: relative;
          }

          .tooltip {
            position: absolute;
            bottom: 70%;
            left: 50%;
            transform: translateX(-50%);
            
           
            padding: 10px;
            border-radius: 8px;
            white-space: normal;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            z-index: 50;
            width: 250px;
            text-align: center;
          }

          .skill-card:hover .tooltip {
            opacity: 1;
            visibility: visible;
          }

          @media (min-width: 640px) { .skill-card { min-width: 180px; margin: 0 15px; } }
          @media (min-width: 768px) { .skill-card { min-width: 200px; margin: 0 15px; } }
          @media (min-width: 1024px) { .skill-card { min-width: 220px; margin: 0 15px; } }
          @media (min-width: 1280px) { .skill-card { min-width: 250px; margin: 0 30px; } }
          `}
        </style>

        <div className="marquee-content">
          {duplicatedBooks.map((book, index) => (
            <Link
              to={`/books/${book._id}`}
              key={index}
              className="skill-card flex flex-col items-center justify-center p-5 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={book.cover_photo}
                alt={book.book_title}
                className="w-19 h-28 rounded-md object-cover"
                onError={(e) => { e.target.src = 'https://placehold.co/100x100?text=Error'; }}
              />

              {/* Popup Tooltip */}
              <div className="tooltip bg-base-200/20 backdrop-blur-sm backdrop-brightness-125  p-2 rounded-lg">
                <h4 className="font-bold text-[10px] md:text-[12px] mb-1">{book.book_title}</h4>
                <p className="text-[8px] md:text-[10px]  mb-[2px]"><span className="font-semibold">Author:</span> {book.book_author}</p>
                <p className="text-[7px]  mb-[2px]"><span className="font-semibold">Category:</span> {book.book_category}</p>
                <p className="text-[7px] "><span className="font-semibold">Pages:</span> {book.total_page}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BooksMarque;
