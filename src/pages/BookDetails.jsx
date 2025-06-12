import React from 'react';
import { motion } from 'framer-motion';
import { FaThumbsUp, FaEdit, FaTrash } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
  // Static sample data for visualization
  const book = useLoaderData() || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 md:p-8"
    >
      {/* Book Details Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:flex gap-6">
        <div className="md:w-1/3">
          <img
            src={book.cover_photo}
            alt={book.book_title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book.book_title}</h1>
          <p className="text-gray-600 mb-2">by {book.book_author}</p>
          <p className="text-gray-600 mb-2">Category: {book.book_category}</p>
          <p className="text-gray-600 mb-2">Total Pages: {book.total_page}</p>
          <p className="text-gray-600 mb-2">Status: {book.reading_status}</p>
          <p className="text-gray-600 mb-4">Overview: {book.book_overview}</p>
          <p className="text-gray-600 mb-4">Added by: {book.user_name} ({book.user_email})</p>
          <div className="flex items-center mb-4">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white"
            >
              <FaThumbsUp /> Upvote ({book.upvote})
            </button>
          </div>

          {/* Reading Status Update Placeholder */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Update Reading Status:</label>
            <select className="border rounded-lg p-2">
              <option value="Want-to-Read">Want to Read</option>
              <option value="Reading">Reading</option>
              <option value="Read">Read</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {book.reviews.length === 0 ? (
          <p>No reviews yet. Be the first to review!</p>
        ) : (
          <div className="space-y-4">
            {book.reviews.map((review) => (
              <div key={review._id} className="border p-4 rounded-lg">
                <p className="text-gray-600">{review.comment}</p>
                <p className="text-sm text-gray-500">By {review.reviewer_name}</p>
                <p>retting: {review.reting}</p>
                <div className="flex gap-2 mt-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Review Form Placeholder */}
        <form className="mt-4">
          <textarea
            placeholder="Write your review..."
            className="w-full border rounded-lg p-2 mb-2"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Post Review
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default BookDetails;