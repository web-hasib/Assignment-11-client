import React, { use } from "react";


import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { auth } from './../firebase/firebase.config';
import { AuthContext } from './../provider/AuthProvider';
import Loading from "./Loading";

const Profile = () => {
  // const [user] = useAuthState(auth);
  const {user}= use(AuthContext)

 

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Fade cascade damping={0.1}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-primary mb-6"
        >
          Welcome, {user.displayName || "User"}
        </motion.h1>

        <div className="bg-base-100 rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-6 items-center">
          <motion.img
            src={user.photoURL || "https://i.ibb.co/YTjW3vF/default-avatar.png"}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div className="flex-1 space-y-3 text-center md:text-left">
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Email Verified:</span>{" "}
              {user.emailVerified ? "✅ Yes" : "❌ No"}
            </p>
            <p>
              <span className="font-semibold">User ID:</span> {user.uid}
            </p>
            <p>
              <span className="font-semibold">Created At:</span>{" "}
              {new Date(user.metadata.creationTime).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Last Login:</span>{" "}
              {new Date(user.metadata.lastSignInTime).toLocaleString()}
            </p>

            <div className="pt-4">
              <button className="btn btn-primary w-full md:w-auto">Edit Profile</button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Profile;
