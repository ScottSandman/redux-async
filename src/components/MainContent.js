import React from "react";
import { Router, Link } from "@reach/router";
import NavBar from "./NavBar";
import CreateBlog from "./CreateBlog";
import BlogByAuthor from "./BlogByAuthor";
import BlogListContainer from "../containers/BlogListContainer";
import WelcomeContainer from "../containers/WelcomeContainer";

//change imports to containers for NavBar, BlogByAuthor later

const MainContent = () => {
  return (
    <div>
      <nav>
        <NavBar />
        {/* <Link to="/">Home</Link>       ---IN NAVBAR.JS----
        <Link to="/createBlog">Create Blog</Link>
        <Link to="/blogsByAuthor">See My Blogs</Link>
        <Link to="/bloglist">See ALL Blogs</Link> */}
      </nav>
      <Router>
        <WelcomeContainer path="/" />
        <CreateBlog path="/createBlog" />
        <BlogByAuthor path="/blogsByAuthor" />
        <BlogListContainer path="/bloglist" />
      </Router>
    </div>
  );
};

export default MainContent;
