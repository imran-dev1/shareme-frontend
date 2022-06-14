import React from "react";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
   const navigate = useNavigate();

   return (
      <div className="flex gap-2 md:gap-5 w-full mt-5 pb-10">
         <div className="flex gap-2 justify-start px-2 items-center rounded-md bg-white border-none outline-none focus-within:shadow-sm w-full">
            <IoMdSearch fontSize={25}></IoMdSearch>
            <input
               type="text"
               className="outline-none w-full bg-white p-2"
               onChange={(e) => setSearchTerm(e.target.value)}
               value={searchTerm}
               onFocus={() => navigate("/search")}
               placeholder="Search..."
            />
         </div>
         <div className="flex gap-2 items-center">
            <Link to={`/user-profile/${user._id}`}>
               <img
                  src={user.image}
                  alt=""
                  className="w-14 rounded-full hidden md:block"
               />
            </Link>
            <Link
               to={`/create-pin`}
               className="bg-black w-12 h-12  md:w-14 text-white rounded-md flex justify-center items-center"
            >
               <IoMdAdd></IoMdAdd>
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
