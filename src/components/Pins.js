import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Feed, PinDetail, CreatePin, Search } from "../components";

const Pins = ({ user }) => {
   const [searchTerm, setSearchTerm] = useState("");
   return (
      <div className="px-2 md:px-5">
         <div className=" bg-gray-100">
            <Navbar
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm}
               user={user}
            ></Navbar>
         </div>
         <div className="h-full">
            <Routes>
               <Route path="/" element={<Feed></Feed>}></Route>
               <Route
                  path="/category/:categoryId"
                  element={<Feed></Feed>}
               ></Route>
               <Route
                  path="/pin-detail/:pinId"
                  element={<PinDetail user={user}></PinDetail>}
               ></Route>
               <Route
                  path="/create-pin"
                  element={<CreatePin user={user}></CreatePin>}
               ></Route>
               <Route
                  path="/search"
                  element={
                     <Search
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                     ></Search>
                  }
               ></Route>
            </Routes>
         </div>
      </div>
   );
};

export default Pins;
