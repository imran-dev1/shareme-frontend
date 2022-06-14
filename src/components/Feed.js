import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { feedQuery, searchQuery } from "../utility/data";
import Spinner from "./Spinner";
import { client } from "../components/client";
import MasonryLayout from "./MasonryLayout";

const Feed = () => {
   const { categoryId } = useParams();
   const [pins, setPins] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      if (categoryId) {
         const query = searchQuery(categoryId);
         client.fetch(query).then((data) => {
            setPins(data);
            setLoading(false);
         });
      } else {
         client.fetch(feedQuery).then((data) => {
            setPins(data);
            setLoading(false);
         });
      }
   }, [categoryId]);

   if (loading) {
      return (
         <Spinner message="We are adding new ideas to your feed!"></Spinner>
      );
   }

   return <div>{pins && <MasonryLayout pins={pins}></MasonryLayout>}</div>;
};

export default Feed;
