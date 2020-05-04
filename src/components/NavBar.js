import React from "react";
import { Link, Router } from "@reach/router";
import WelcomeContainer from "../containers/WelcomeContainer";
import CreateBlog from "./CreateBlog";
import BlogByAuthor from "./BlogByAuthor";
import BlogListContainer from "../containers/BlogListContainer";

const NavBar = () => {
  return (
    <div>
      <nav>
        Nav Bar Would Be Here
        <Link to="/">Home</Link>
        <Link to="/createBlog">Create Blog</Link>
        <Link to="/blogsByAuthor">See My Blogs</Link>
        <Link to="/bloglist">See ALL Blogs</Link>
      </nav>
      {/* <Router>  ---IN MAINCONTENT.JS----
        <WelcomeContainer path="/" />
        <CreateBlog path="/createBlog" />
        <BlogByAuthor path="/blogsByAuthor" />
        <BlogListContainer path="/bloglist" />
      </Router> */}
    </div>
  );
};

export default NavBar;
