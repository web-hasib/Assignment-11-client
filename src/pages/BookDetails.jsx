import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaThumbsUp, FaTrash, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const loadedBook = useLoaderData();
  const [book, setBook] = useState(loadedBook);
  const [upvote, setUpvote] = useState(book.upvote.includes(user?.email));
  const [upvoteCount, setUpvoteCount] = useState(book.upvote.length);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(null);

  useEffect(() => {
    setUpvote(book.upvote.includes(user?.email));
    setUpvoteCount(book.upvote.length);
  }, [user, book.upvote]);

  const handleUpvote = () => {
    if (user?.email === book.user_email)
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "You cannot upvote your own book!",
      });

    axios
      .patch(`https://virtual-bookshelf-server-five.vercel.app/upvote/${book._id}`, {
        email: user.email,
      })
      .then((data) => {
        const isUpvoted = data?.data?.upvoted;
        setBook((prevBook) => {
          const updatedUpvote = isUpvoted
            ? [...prevBook.upvote, user.email]
            : prevBook.upvote.filter((email) => email !== user.email);
          return { ...prevBook, upvote: updatedUpvote };
        });
        setUpvote(isUpvoted);
        setUpvoteCount((prev) => (isUpvoted ? prev + 1 : prev - 1));
      });
  };

  const handleReadingStatusUpdate = (newStatus) => {
    if (!user?.email) return;

    axios
      .patch(`https://virtual-bookshelf-server-five.vercel.app/updateReadingStatus/${book._id}`, {
        email: user.email,
        reading_status: newStatus,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setBook((prev) => ({ ...prev, reading_status: newStatus }));
          Swal.fire({
            icon: "success",
            title: "Status Updated",
            text: `Your reading status is now "${newStatus}".`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: "You can only update your own book reading status.",
          });
        }
      });
  };

  const handleAddReview = async () => {
    if (!user?.email || rating === 0 || comment.trim().length < 10) return;

    if (book.user_email === user.email) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "You cannot review your own book!",
      });
    }

    const alreadyReviewed = book.reviews?.some(
      (rev) => rev.reviewer_email === user.email
    );

    if (alreadyReviewed) {
      return Swal.fire({
        icon: "warning",
        title: "Already Reviewed",
        text: "You have already submitted a review for this book.",
      });
    }

    const review = {
      reviewer_name: user.displayName || "Anonymous",
      reviewer_email: user.email,
      comment,
      rating: rating,
    };

    try {
      const res = await axios.patch(
        `https://virtual-bookshelf-server-five.vercel.app/review/${book._id}`,
        review
      );
      if (res.data.modifiedCount > 0) {
        Swal.fire("Success!", "Your review has been added.", "success");
        setBook((prev) => ({
          ...prev,
          reviews: [...prev.reviews, review],
        }));
        setComment("");
        setRating(0);
      }
    } catch (error) {
      Swal.fire("Error", "Failed to submit review", error.message);
    }
  };

  const handleDeleteReview = async (reviewer_email) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axios.patch(
          `https://virtual-bookshelf-server-five.vercel.app/deleteReview/${book._id}`,
          { email: reviewer_email }
        );
        if (res.data.modifiedCount > 0) {
          Swal.fire("Deleted!", "Your review has been removed.", "success");
          setBook((prev) => ({
            ...prev,
            reviews: prev.reviews.filter(
              (rev) => rev.reviewer_email !== reviewer_email
            ),
          }));
        }
      } catch (error) {
        Swal.fire("Error", "Failed to delete review", error.message);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto p-4 md:p-8"
    >
        <Helmet>
                <title>
                    BookShelf || {book.book_title}
                </title>
            </Helmet>
      {/* Book Details */}
      <div className="bg-primary-content/10 shadow-lg rounded-lg p-6 md:flex gap-6">
        <div className="md:w-1/3">
          <img
            src={book.cover_photo}
            alt={book.book_title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl primary font-bold mb-2">{book.book_title}</h1>
          <p className="text-secondary-content/55 text-sm mb-2">by {book.book_author}</p>
          <p className="text-secondary-content/55 text-sm mb-2">Category: {book.book_category}</p>
          <p className="text-secondary-content/55 text-sm mb-2">Total Pages: {book.total_page}</p>
          <p className="text-secondary-content/55 text-sm mb-2">Status: {book.reading_status}</p>
          <p className="text-secondary-content/55 text-sm mb-4">Overview: {book.book_overview}</p>
          <p className="text-secondary-content/55 text-sm mb-4">
            Added by: {book.user_name} ({book.user_email})
          </p>

          <div className="flex items-center mb-4">
            <button
              onClick={handleUpvote}
              className="flex items-center gap-2 px-4 py-2 btn btn-accent"
            >
              <FaThumbsUp /> {upvote ? "Upvoted" : "Upvote"}
            </button>
            <span className="text-primary-content font-bold text-lg px-5">{upvoteCount}</span>
          </div>

          {/* Reading Status */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Update Reading Status:</label>
            <select
              className="border rounded-lg p-2"
              value={book.reading_status}
              onChange={(e) => handleReadingStatusUpdate(e.target.value)}
            >
              <option value="Want-to-Read">Want to Read</option>
              <option value="Reading">Reading</option>
              <option value="Read">Read</option>
            </select>
          </div>
        </div>
      </div>

      {/* All Reviews
      <div className="mt-12 bg-accent/5 shadow-md rounded-xl p-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-6">User Reviews</h2>
        {book.reviews?.length > 0 ? (
          book.reviews.map((rev, index) => (
            <div
              key={index}
              className="border-b border-gray-200/50 border-dashed pb-4 mb-4 last:border-none"
            >
              <div className="flex items-center mb-2 justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary-content/40 flex items-center justify-center font-bold text-white mr-3">
                    {rev.reviewer_name?.charAt(0) || "U"}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-content">{rev.reviewer_name}</p>
                    <div className="flex text-yellow-400">
                      {Array(rev.rating || 0)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>
                  </div>
                </div>

                {rev.reviewer_email === user?.email && (
                  <button
                    onClick={handleDeleteReview}
                    className="text-error hover:text-red-600"
                    title="Delete Review"
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
              <p className="text-primary-content italic md:pl-5">{rev.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div> */}
       {/* All Reviews */}
      <div className="mt-12 bg-accent/5 shadow-md rounded-xl p-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-6">User Reviews</h2>
        {book.reviews?.length > 0 ? (
          book.reviews.map((rev, index) => (
            <div
              key={index}
              className="border-b border-gray-200/50 border-dashed pb-4 mb-4 last:border-none"
            >
              <div className="flex items-center mb-2 justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary-content/40 flex items-center justify-center font-bold text-white mr-3">
                    {rev.reviewer_name?.charAt(0) || "U"}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-content">
                      {rev.reviewer_name}
                    </p>
                    <div className="flex text-yellow-400">
                      {Array(rev.rating || 0)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>
                  </div>
                </div>

                {rev.reviewer_email === user?.email && (
                  <button
                    onClick={() => handleDeleteReview(rev.reviewer_email)}
                    className="text-error hover:text-red-600"
                    title="Delete Review"
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
              <p className="text-primary-content italic md:pl-5">{rev.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>

      {/* Add Review */}
      <div className="mt-12 bg-base-content/5 shadow-md rounded-xl p-6 max-w-7xl mx-auto">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white mr-4">
            {user?.displayName?.charAt(0) || "U"}
          </div>
          <div>
            <p className="text-xl font-semibold text-primary">{user?.displayName || "Anonymous"}</p>
            <p className="text-sm text-primary-content">Share your thoughts</p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 my-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(null)}
              className={`w-8 h-8 cursor-pointer transition-transform duration-150 hover:scale-110 ${
                (hoveredStar || rating) >= star ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-base"
          placeholder="Describe your experience (at least 10 characters)..."
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={300}
        ></textarea>
        <div className="text-sm text-gray-400 mt-1 text-right">{comment.length}/300</div>

        {/* Submit Button */}
        <button
          onClick={handleAddReview}
          disabled={comment.length < 10 || rating === 0}
          className={`mt-4 w-full text-white font-medium py-3 rounded-lg transition-all duration-300 ${
            comment.length >= 10 && rating !== 0
              ? "bg-accent hover:bg-accent-focus"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Review
        </button>
      </div>
    </motion.div>
  );
};

export default BookDetails;
