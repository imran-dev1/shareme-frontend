import React, { useEffect, useState } from "react";
import { AiOutlineCloudDownload, AiOutlineDownload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../utility/fetchUser";
import { client, urlFor } from "./client";
import { v4 as uuidv4 } from "uuid";

const Pin = ({ pin }) => {
   const { postedBy, _id, image, destination, save } = pin;
   const [postHovered, setPostHovered] = useState(false);
   const [savingPin, setSavingPin] = useState(false);
   const navigate = useNavigate();
   const user = fetchUser();

   const alreadySaved = !!save?.filter(
      (item) => item.postedBy._id === user?.uid
   )?.length;

   const savePin = (id) => {
      if (!alreadySaved) {
         setSavingPin(true);
         client
            .patch(id)
            .setIfMissing({ save: [] })
            .insert("after", "save[-1]", [
               {
                  _key: uuidv4(),
                  userId: user.uid,
                  postedBy: {
                     _type: "postedBy",
                     _ref: user.uid,
                  },
               },
            ])
            .commit()
            .then(() => {
               setSavingPin(false);
               window.location.reload();
            });
      }
   };

   return (
      <div className="m-2">
         <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            onClick={() => navigate(`/pin-detail/${_id}`)}
            className="relative cursor-zoom-in w-auto hover:shadow-xl rounded-lg overflow-hidden"
         >
            <img
               className="w-full"
               src={urlFor(image).width(250).url()}
               alt="user-post"
            />
            {postHovered && (
               <div className="flex flex-col justify-between absolute top-0 w-full h-full p-1">
                  <div className="flex justify-between gap-2">
                     <a
                        href={`${image?.asset?.url}?dl=`}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/75 hover:bg-white hover:shadow-md p-2 rounded-full"
                     >
                        <AiOutlineDownload className="text-xl"></AiOutlineDownload>
                     </a>

                     {alreadySaved ? (
                        <button
                           className=" bg-red-500/80 hover:bg-red-500 text-white px-2 rounded-lg text-sm "
                           onClick={(e) => e.stopPropagation()}
                        >
                           {save.length} Saved
                        </button>
                     ) : (
                        <button
                           className=" bg-red-500/80 hover:bg-red-500 text-white px-2 rounded-lg text-sm "
                           onClick={(e) => {
                              e.stopPropagation();
                              savePin(_id);
                           }}
                        >
                           {savingPin ? "Saving..." : "Save"}
                        </button>
                     )}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Pin;
