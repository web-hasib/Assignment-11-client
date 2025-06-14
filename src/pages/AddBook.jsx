import React, { use } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import axios from "axios";

const AddBook = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const email = user?.email || "";
  const user_name = user?.displayName || "Anonymous";

  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;

    const newBook = {
      book_title: form.book_title.value,
      cover_photo: form.cover_photo.value,
      book_author: form.book_author.value,
      total_page: parseInt(form.total_page.value),
      book_category: form.book_category.value,
      reading_status: form.reading_status.value,
      book_overview: form.book_overview.value,
      user_email: email,
      user_name: user_name,
      upvote: [],
      reviews: [],
    };

    axios.post("https://virtual-bookshelf-server-five.vercel.app/books", newBook)
        .then((res) => {
        if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book added successfully!",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/allBooks");
            }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please try again.",
            });
        }
    })
   
  };

  return (
    <Slide>
      <Helmet>
        <title>Virtual Bookshelf || Add Book</title>
      </Helmet>

      <div className="p-6 md:p-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl primary text-primary font-bold">
            Add New Book
          </h1>
          <p className=" text-accent italic">
            Fill in the form below to add your favorite book to the shelf.
          </p>
        </div>

        <form onSubmit={handleAddBook} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label font-bold text-gray-400">
                Book Title
              </label>
              <input
                type="text"
                name="book_title"
                className="input input-bordered border-gray-100 w-full"
                placeholder="Book Title"
                required
              />
            </div>
            <div>
              <label className="label font-bold text-gray-400">Author</label>
              <input
                type="text"
                name="book_author"
                className="input input-bordered border-gray-100 w-full"
                placeholder="Author Name"
                required
              />
            </div>
            <div>
              <label className="label font-bold text-gray-400">
                Cover Image URL
              </label>
              <input
                type="text"
                name="cover_photo"
                className="input input-bordered border-gray-100 w-full"
                placeholder="https://..."
                required
              />
            </div>
            <div>
              <label className="label font-bold text-gray-400">
                Total Pages
              </label>
              <input
                type="number"
                name="total_page"
                className="input input-bordered border-gray-100 w-full"
                placeholder="e.g., 300"
                required
              />
            </div>
            <div>
              <label className="label font-bold text-gray-400">Category</label>
              <input
                type="text"
                name="book_category"
                className="input input-bordered border-gray-100 w-full"
                placeholder="Fiction, History, etc."
                required
              />
            </div>
            <div>
              <label className="label font-bold text-gray-400">
                Reading Status
              </label>
              <select
                name="reading_status"
                className="select select-bordered border-gray-100 w-full"
              >
                <option value="Unread">Unread</option>
                <option value="Reading">Reading</option>
                <option value="Read">Read</option>
              </select>
            </div>
          </div>

          <div>
            <label className="label font-bold text-gray-400">Overview</label>
            <textarea
              name="book_overview"
              rows="4"
              className="textarea textarea-bordered border-gray-100 w-full"
              placeholder="Write a short overview..."
              required
            />
          </div>

          <button
            type="submit"
            className="mt-10 btn w-full btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info"
          >
            Add Book
          </button>
        </form>
      </div>
    </Slide>
  );
};

export default AddBook;
