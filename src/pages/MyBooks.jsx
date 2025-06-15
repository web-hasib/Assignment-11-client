import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import TopBookCard from "../components/TopBookCard";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";
import Empty from './Empty';

const MyBooks = () => {
  const [data, setData] = useState([]);
  // need to implement loading state 
  
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  // console.log(user.accessToken);

  const fetchBooks = () => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/books?email=${user.email} `,{
          headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
        })
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

  if(data.length === 0) {
    return (
     <Empty/>
    );
  }

  return (
    <div>
      <h1 className="text-2xl text-primary text-center py-5 primary font-bold mb-4">My books: {data.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((book) => (
          <div
            key={book._id}
            className=" pb-4 rounded-3xl bg-accent-content/10 shadow"
          >
            <TopBookCard book={book} />
            <div className="flex justify-end gap-4 px-5 mt-2">
              <button
                onClick={() => handleEdit(book._id)}
                className="btn btn-sm btn-circle btn-info text-white"
                title="Edit"
              >
                <FaEdit size={16} />
              </button>
              <button
                onClick={() => handleDelete(book._id)}
                className="btn btn-sm btn-circle btn-error text-white"
                title="Delete"
              >
                <FaTrash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
