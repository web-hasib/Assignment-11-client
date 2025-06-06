// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { useNavigate } from "react-router";
import error from '../assets/lottie/error.json'
import Lottie from "lottie-react";

const Error = () => {
    const navigate = useNavigate();
    
  return (
   

      <div className="min-h-screen flex flex-col items-center justify-center bg-base  transition-colors duration-300 px-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* <DotLottieReact
          src="https://lottie.host/6b26a1de-ba1b-4ac3-9034-cebe9a64df00/xjAblTOiLR.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        /> */}
        <Lottie style={{height:'220px'}} animationData={error} loop={true} />
        
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-2 mt-6">
        Something went wrong!
      </h1>

      <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
        Page not found. Please check the URL or go back to the previous page.
      </p>

      <button
        className="mt-6  btn btn-soft border-blue-300 rounded-full px-7 hover:text-white btn-info"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default Error;
