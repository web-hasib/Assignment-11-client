import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const MyBooks = () => {
  const [data, setData] = useState([]);
  const { user } = use(AuthContext);
  useEffect(() => {
    // Fetching books data for the logged-in user
    if (user?.email) {
      axios
        .get(`http://localhost:3000/books?user_email=${user.email}`)
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

    console.log(data);
  return <div>My Books Page</div>;
};

export default MyBooks;
