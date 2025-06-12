
import { FaArrowUp, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const TopBookCard = ({ book }) => {
  const {
    book_title,
    cover_photo,
    total_page,
    book_author,
    book_category,
    reading_status,
    upvote,
    reviews = [],
  } = book;

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length
        ).toFixed(1)
      : "N/A";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-base-100 shadow-sm rounded-2xl p-4 flex flex-col md:flex-row gap-5 hover:shadow-2xl transition-shadow duration-700 items-center"
    >
      <img
        src={cover_photo}
        alt={book_title}
        className="w-60 h-96 md:w-40 md:h-60 object-cover rounded-xl mx-auto"
      />
      <div className="flex-1 space-y-2">
        <h2 className="text-xl md:text-lg font-bold">{book_title}</h2>
        <p className="text-xs text-gray-500">by {book_author}</p>
        <div className="text-sm flex flex-wrap gap-2">
          <span className="text-[14px] md:text-[10px] text-primary-content badge badge-info ">{book_category}</span>
          <span className="text-[14px] md:text-[10px] text-primary-content badge badge-success">{reading_status}</span>
          <span className="text-[14px] md:text-[10px] text-primary-content badge badge-ghost">Pages: {total_page}</span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <FaArrowUp className="text-red-300" />
          <span className="font-semibold text-[14px] md:text-[10px]">{upvote.length} Upvotes</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[14px] md:text-[10px]">
          <FaStar className="text-yellow-400" />
          <span>
             <span className="font-semibold">{averageRating}</span>
          </span>
          <span className="text-[10px] md:text-[8px] font-thin">({reviews.length} reviews)</span>
        </div>

        <p className="mt-2 text-[12px] md:text-[8px] text-gray-400 line-clamp-3">
          {book.book_overview}
        </p>

        <Link to={`/books/${book._id}`} className="btn btn-sm btn-primary mt-2">View Details</Link>
      </div>
    </motion.div>
  );
};

export default TopBookCard;
