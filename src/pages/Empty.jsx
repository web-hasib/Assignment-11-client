// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { useNavigate } from "react-router";
import empty from '../assets/lottie/empty.json'
import Lottie from "lottie-react";

const Empty = () => {
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
        <Lottie style={{height:'260px'}} animationData={empty} loop={true} />
        
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold text-red-400 mb-2 mt-6">
        Oops ! 
      </h1>

      <p className="flex flex-col md:flex-row gap-2 text-gray-600 dark:text-gray-400 text-center mt-2">
        <span>There is no content here </span>Please check the URL or go back to the previous page.
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

export default Empty;
