import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = ({ user, setSidebarToggle }) => {
   const isActiveStyle =
      "mt-3 px-5 flex items-center gap-2 text-black font-extrabold border-r-2 border-black transition-duration-200 ease-in-out capitalize";
   const isNotActiveStyle =
      "mt-3 px-5 flex items-center gap-2 text-gray-500 hover:text-black hover:border-r-2 hover:border-black transition-all transition-duration-200 ease-in-out capitalize";

   const categories = [
      { name: "Animals" },
      { name: "Gaming" },
      { name: "Foods" },
      { name: "Nature" },
      { name: "City" },
      { name: "River" },
      { name: "Pets" },
   ];

   const handleSidebar = () => {
      if (setSidebarToggle) {
         setSidebarToggle(false);
      }
   };
   return (
      <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
         <div className="flex flex-col">
            <Link to="/" className="flex px-5 py-6 w-190">
               <img src={logo} alt="logo" className="w-full" />
            </Link>
            <NavLink
               to="/"
               className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
               }
               onClick={handleSidebar}
            >
               <AiOutlineHome fontSize={20}></AiOutlineHome> Home
            </NavLink>
            <p className="mt-10 px-5 text-gray-500">Browse categories</p>
            <div className="">
               {categories.map((c) => {
                  return (
                     <NavLink
                        to={`/category/${c.name}`}
                        className={({ isActive }) =>
                           isActive ? isActiveStyle : isNotActiveStyle
                        }
                        onClick={handleSidebar}
                        key={c?.name}
                     >
                        {c?.name}
                     </NavLink>
                  );
               })}
            </div>
         </div>

         {user && (
            <Link
               to={`/user-profile/${user._id}`}
               className="flex items-center gap-3 px-5 pb-5"
            >
               <img
                  src={user.image}
                  alt="user"
                  className=" w-12 rounded-full"
               />
               {user.userName}
            </Link>
         )}
      </div>
   );
};

export default Sidebar;
