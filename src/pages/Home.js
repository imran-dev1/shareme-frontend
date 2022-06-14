import React, { useEffect, useRef, useState } from "react";
import { Pins, Sidebar, UserProfile } from "../components";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link, Route, Routes } from "react-router-dom";
import { userQuery } from "../utility/data";
import { client } from "../components/client";
const Home = () => {
   const [sidebarToggle, setSidebarToggle] = useState(false);
   const [user, setUser] = useState({});
   const scrollRef = useRef(null);

   const userInfo =
      localStorage.getItem("user") !== "undefined"
         ? JSON.parse(localStorage.getItem("user"))
         : localStorage.clear();

   useEffect(() => {
      const query = userQuery(userInfo?.uid);
      client.fetch(query).then((data) => {
         setUser(data[0]);
      });
   }, []);

   useEffect(() => {
      scrollRef.current.scrollTo(0, 0);
   }, []);

   return (
      <div className=" flex flex-col md:flex-row bg-gray-100 h-screen transition-height duration-75 ease-out">
         <div className="hidden md:flex h-screen flex-initial">
            <Sidebar user={user && user}></Sidebar>
         </div>
         <div className="flex md:hidden flex-row">
            <div className="flex w-full p-2 items-center justify-between shadow-md">
               <FiMenu
                  fontSize={35}
                  className="cursor-pointer"
                  onClick={() => setSidebarToggle(true)}
               ></FiMenu>
               <Link to="/">
                  <img src={logo} alt="logo" className="w-28" />
               </Link>
               <Link to={`/user-profile/${user?._id}`}>
                  <img
                     src={user?.image}
                     alt="logo"
                     className="w-12 rounded-full"
                  />
               </Link>
            </div>
            {sidebarToggle && (
               <div className="fixed w-4/5 h-screen overflow-y-auto bg-white shadow-md z-10 animate-slide-in">
                  <div className="absolute flex justify-end items-center w-full p-2">
                     <AiFillCloseCircle
                        fontSize={25}
                        onClick={() => setSidebarToggle(false)}
                     ></AiFillCloseCircle>
                  </div>
                  <Sidebar
                     user={user && user}
                     setSidebarToggle={setSidebarToggle}
                  ></Sidebar>
               </div>
            )}
         </div>
         <div
            className="pb-2 flex-1 h-screen overflow-y-scroll"
            ref={scrollRef}
         >
            <Routes>
               <Route
                  path="/user-profile/:userId"
                  element={<UserProfile user={user && user}></UserProfile>}
               ></Route>
               <Route
                  path="/*"
                  element={<Pins user={user && user}></Pins>}
               ></Route>
            </Routes>
         </div>
      </div>
   );
};

export default Home;
