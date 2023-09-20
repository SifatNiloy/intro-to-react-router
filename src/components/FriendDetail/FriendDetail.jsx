import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h2>Everything about that person is here</h2>
      <h3>Name: {friend.name}</h3>
      <h3>UserName: {friend.username}</h3>
      <h3>Email : {friend.email}</h3>
      <h3>City: {friend.address.city}</h3>
      <h3>Phone : {friend.phone}</h3>
    </div>
  );
};

export default FriendDetail;
