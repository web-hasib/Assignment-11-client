import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState(null);

  // Fetch book by ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => setBookData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleEditBook = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedBook = {
      book_title: form.book_title.value,
      cover_photo: form.cover_photo.value,
      book_author: form.book_author.value,
      total_page: parseInt(form.total_page.value),
      book_category: form.book_category.value,
      reading_status: form.reading_status.value,
      book_overview: form.book_overview.value,
    };

    axios
      .patch(`http://localhost:3000/books/${id}`, updatedBook)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Book updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myBooks");
        }
      })
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Update failed!",
          text: "Try again later.",
        })
      );
  };

  if (!bookData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <Slide>
      <Helmet>
        <title>Edit Book</title>
      </Helmet>

      <div className="p-6 md:p-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary primary">Edit Book</h1>
          <p className="italic text-accent">Update your book information below.</p>
        </div>

        <form onSubmit={handleEditBook} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label font-bold text-gray-400">Book Title</label>
              <input
                defaultValue={bookData.book_title}
                name="book_title"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-bold text-gray-400">Author</label>
              <input
                defaultValue={bookData.book_author}
                name="book_author"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-bold text-gray-400">Cover Photo</label>
              <input
                defaultValue={bookData.cover_photo}
                name="cover_photo"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-bold text-gray-400">Total Pages</label>
              <input
                type="number"
                defaultValue={bookData.total_page}
                name="total_page"
                className="input input-bordered w-full"
                required
              />
            </div>
          
            <div>
  <label className="label font-bold text-gray-400">Category</label>
  <select
    name="book_category"
    className="select select-bordered border-gray-100 w-full"
    required
    defaultValue={bookData.book_category}
  >
    <option value="">Select a category</option>
    <option value="Fiction">Fiction</option>
    <option value="Non-Fiction">Non-Fiction</option>
    <option value="Fantasy">Fantasy</option>
    <option value="Finance">Finance</option>
  </select>
</div>

            <div>
              <label className="label font-bold text-gray-400">Reading Status</label>
              <select
                name="reading_status"
                defaultValue={bookData.reading_status}
                className="select select-bordered w-full"
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
              defaultValue={bookData.book_overview}
              name="book_overview"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            />
          </div>

          <button type="submit" className="mt-10 btn w-full btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info">
            Update Book
          </button>
        </form>
      </div>
    </Slide>
  );
};

export default EditBook;
