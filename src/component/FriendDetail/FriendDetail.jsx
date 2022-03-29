import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const [friend, setFriend] = useState({});
  const { friendId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h1>showing friends details: {friendId}</h1>
      <h2>name : {friend.name}</h2>
      <h2>email : {friend.email}</h2>
      <h5>website : {friend.website}</h5>
      <p><small>city : {friend.address?.city}</small></p>
    </div>
  );
};

export default FriendDetail;
