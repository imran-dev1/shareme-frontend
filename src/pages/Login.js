import React from "react";
import video from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
   return (
      <div className="flex items-center justify-start h-screen flex-col">
         <div className="relative w-full h-full">
            <video
               src={video}
               type="video/mp4"
               controls={false}
               muted
               autoPlay
               loop
               className="w-full h-full object-cover"
            ></video>
            <div className="absolute flex justify-center items-center flex-col left-0 top-0 right-0 bottom-0 bg-blackOverlay/70 gap-5 ">
               <img src={logo} alt="" className=" max-w-[150px]" />
               <button className="bg-white rounded-md flex items-center p-2 gap-2 outline-none shadow-2xl shadow-black">
                  <FcGoogle className="text-2xl"></FcGoogle> Sign in with Google
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;
