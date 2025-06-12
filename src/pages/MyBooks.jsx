import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import TopBookCard from "../components/TopBookCard";

const MyBooks = () => {
  const [data, setData] = useState([]);
  const { user } = use(AuthContext);
  useEffect(() => {
    // Fetching books data for the logged-in user
    if (user?.email) {
      axios
        .get(`http://localhost:3000/books?email=${user.email}`)
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

    console.log(data);
  return <div>
    <h1>My books : {data.length}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((book) => (
        <TopBookCard key={book._id} book={book}/>
      ))} 
    </div>
  </div>;
};

export default MyBooks;
