import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
   return (
      <div className="flex gap-2 flex-col justify-center items-center w-full h-full">
         <Circles height={50} width={200} color="#ef4444"></Circles>
         <p className="text-lg pax-2">{message}</p>
      </div>
   );
};

export default Spinner;
