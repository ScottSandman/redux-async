import React from "react";
import { BLOG_REQUEST_ERROR } from "../actions/actions";

export default function BlogList({
  blogs,
  boundGetBlogs,
  boundHideBlogs,
  status,
}) {
  console.log("blogs", blogs);
  if (!blogs.length) {
    if (status === BLOG_REQUEST_ERROR) {
      return (
        <div>
          Sorry, There was an error processing your request.
          <button onClick={() => boundGetBlogs()}>Request Blogs</button>
        </div>
      );
    }
    return <button onClick={() => boundGetBlogs()}>Request Blogs</button>;
  }

  return (
    <div>
      <button onClick={() => boundHideBlogs()}>Hide Blogs</button>
      {blogs.map((blog) => (
        <div key={blog.id}>
          {blog.title}
          <br />
          {blog.date.slice(0, 10)}
        </div>
      ))}
    </div>
  );
}
