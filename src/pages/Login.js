import React from "react";
import video from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { FcGoogle } from "react-icons/fc";
import auth from "../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { client } from "../components/client";
import { Oval } from "react-loader-spinner";

const Login = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const navigate = useNavigate();

   if (user) {
      localStorage.setItem("user", JSON.stringify(user.user));
      const { displayName, photoURL, uid } = user.user;

      const doc = {
         _id: uid,
         _type: "user",
         userName: displayName,
         image: photoURL,
      };
      client.createIfNotExists(doc).then((res) => {
         navigate("/", { replace: true });
      });
   }

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
               <button
                  onClick={() => signInWithGoogle()}
                  className="bg-white rounded-md flex items-center p-3 outline-none shadow-2xl shadow-black"
               >
                  {!loading ? (
                     <span className="flex items-center gap-2">
                        <FcGoogle className="text-2xl"></FcGoogle> Sign in with
                        Google
                     </span>
                  ) : (
                     <span className="flex items-center gap-2">
                        Logging in{" "}
                        <Oval
                           ariaLabel="loading-indicator"
                           height={20}
                           width={20}
                           strokeWidth={5}
                           color="black"
                           secondaryColor="lightgray"
                        />
                     </span>
                  )}
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;
