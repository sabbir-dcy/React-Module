import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  const [posts, sePosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => sePosts(data));
  }, []);
  return (
    <div>
      <h2>every posts : {posts.length}</h2>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          {post.id}
        </Link>
      ))}
      <Outlet></Outlet>
    </div>
  );
};

export default Posts;
