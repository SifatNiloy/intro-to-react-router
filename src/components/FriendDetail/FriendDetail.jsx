import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h2>Everything about that person is here</h2>
    </div>
  );
};

export default FriendDetail;
