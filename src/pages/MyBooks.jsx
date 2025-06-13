import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import TopBookCard from "../components/TopBookCard";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const MyBooks = () => {
  const [data, setData] = useState([]);
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const fetchBooks = () => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/books?email=${user.email}`)
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/books/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Your book has been deleted.", "success");
            fetchBooks();
          })
          .catch((err) => {
            Swal.fire("Error!", "Something went wrong.", "error");
            console.error(err);
          });
      }
    });
  };

  const handleEdit = (id) => {
    navigate(`/editBook/${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My books: {data.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((book) => (
          <div key={book._id} className="border p-4 rounded shadow">
            <TopBookCard book={book} />
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => handleEdit(book._id)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(book._id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
