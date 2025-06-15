import React, { useState, useEffect, use } from "react";
import { AuthContext } from "./../provider/AuthProvider";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { IoBookSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import axios from "axios";
import empty from '../assets/lottie/empty.json'
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import Loading from "./Loading";

const Profile = () => {
  const { user, updateUser } = use(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.displayName || "");
  const [photo, setPhoto] = useState(user.photoURL || "");
  const [showDetails, setShowDetails] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true)


  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
 
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`https://virtual-bookshelf-server-five.vercel.app/mybooks/${user.email}`,{
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        });
        const books = res.data;
        console.log(res.data);

        const categoryCount = {};
        books.forEach(book => {
          const cat = book.book_category;
          categoryCount[cat] = (categoryCount[cat] || 0) + 1;
        });


        const formattedData = Object.entries(categoryCount).map(([category, count], index) => ({
          name: category,
          value: count,
          fill: colors[index % colors.length],
          label: count,
        }));

        setChartData(formattedData);
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch chart data:", error);
      }
    };

    if (user?.email) {
      fetchBooks();
    }
  }, [user]);

  const handleUpdate = async () => {
    try {
      await updateUser({
        displayName: name,
        photoURL: photo,
      });

      Swal.fire("Success", "Profile updated successfully!", "success");
      setEditing(false);
    } catch (error) {
      Swal.fire("Error", "Update failed: " + error.message, "error");
    }
  };
  if(loading){
    return (
      <div>
        {/* <h1>loading ............</h1> */}
        <Loading></Loading>
      </div>
    )
  }

  return (
    <motion.div className="max-w-7xl mx-auto py-10">
        <Helmet>
                <title>
                    BookShelf || {user.displayName || "User"}
                </title>
            </Helmet>
      {/* profil  */}
      <Fade cascade damping={0.1}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-primary mb-6"
        >
          <motion.span
            animate={{
              color: ['#ff5733', '#33ff33', '#8a33ff'],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            Welcome
          </motion.span>
          ,<span className="primary"> {user.displayName || "User"}</span>
        </motion.h1>

        <div className="bg-base-100 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
          <motion.img
            src={photo || "https://i.ibb.co/8L7JtyF0/user.jpg"}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div className="flex-1 space-y-3 text-center md:text-left">
            {editing ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  className="input input-bordered w-full max-w-sm"
                />
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Photo URL"
                  className="input input-bordered w-full max-w-sm"
                />
                <div className="pt-4 space-x-2">
                  <button onClick={handleUpdate} className="btn btn-success">
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setName(user.displayName || "");
                      setPhoto(user.photoURL || "");
                      setEditing(false);
                    }}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p><span className="font-semibold">Email:</span> {user.email}</p>
                <p><span className="font-semibold">Email Verified:</span> {user.emailVerified ? "Yes" : "No"}</p>

                <div className="pt-4 flex flex-col md:flex-row space-y-5 space-x-2">
                  <button onClick={() => setEditing(true)} className="btn btn-primary w-full md:w-auto">
                    Edit Profile
                  </button>
                  <button onClick={() => setShowDetails(!showDetails)} className="btn btn-outline">
                    {showDetails ? "Hide Info" : "Show More Info"}
                  </button>
                </div>

                {showDetails && (
                  <div className="pt-4 space-y-2">
                    <p className="text-sm"><span className="text-sm font-thin text-primary italic">User ID:</span> {user.uid}</p>
                    <p className="text-sm"><span className="text-sm font-thin text-primary italic">Created At:</span> {new Date(user.metadata.creationTime).toLocaleString()}</p>
                    <p className="text-sm"><span className="text-sm font-thin text-primary italic">Last Login:</span> {new Date(user.metadata.lastSignInTime).toLocaleString()}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Fade>

      {/* Bar Chart*/}
     <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-10 bg-base-100 p-6 rounded-xl"
>
        <h2 className="text-2xl font-semibold mb-4 primary  py-10 flex justify-center items-center gap-3">  <IoBookSharp size={40}/> Your Books by Category</h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                shape={<TriangleBar />}
                label={{
                  position: "top",
                  fill: "#333",
                  fontWeight: "bold",
                }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div>
            <p className="text-center text-gray-500">No data to display.</p>
 <Lottie style={{height:'260px'}} animationData={empty} loop={true} />
          </div>
        )}
      </motion.div>
    



    </motion.div>

  );
};

export default Profile;
