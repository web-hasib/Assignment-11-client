import React, { useState, use } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "./../provider/AuthProvider";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = use(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.displayName || "");
  const [photo, setPhoto] = useState(user.photoURL || "");
  const [showDetails, setShowDetails] = useState(false);

  const handleUpdate = async () => {
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      setEditing(false);
      location.reload();
      Swal.fire('success'); 
    } catch (error) {
      Swal.fire("Update failed:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <Fade cascade damping={0.1}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-primary mb-6"
        >
          <motion.span 
           animate={{color:['#ff5733','#33ff33','#8a33ff'],
            transition:{duration:1 ,repeat:Infinity}
           }}
           >Welcome</motion.span>,<span className="primary"> {user.displayName || "User"}</span>
        </motion.h1>

        <div className="bg-base-100 rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-6 items-center">
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
                <p>
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-semibold">Email Verified:</span>{" "}
                  {user.emailVerified ? " Yes" : "No"}
                </p>

                <div className="pt-4 space-x-2">
                  <button
                    onClick={() => setEditing(true)}
                    className="btn btn-primary w-full md:w-auto"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="btn btn-outline"
                  >
                    {showDetails ? "Hide Info" : "Show More Info"}
                  </button>
                </div>

                {showDetails && (
                  <div className="pt-4 space-y-2">
                    <p className="text-sm ">
                      <span className="text-sm font-thin text-primary   italic">User ID:</span> {user.uid}
                    </p>
                    <p className="text-sm ">
                      <span className="text-sm font-thin text-primary    italic">Created At:</span>{" "}
                      {new Date(user.metadata.creationTime).toLocaleString()}
                    </p>
                    <p className="text-sm ">
                      <span className="text-sm font-thin text-primary   italic">Last Login:</span>{" "}
                      {new Date(user.metadata.lastSignInTime).toLocaleString()}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Profile;