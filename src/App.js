import React from "react";
import { Link, Router, Redirect } from "@reach/router";
import "./App.css";
import MainContent from "./components/MainContent";
import SignInContainer from "./containers/SignInContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import WelcomeContainer from "./containers/WelcomeContainer";
import CreateBlog from "./components/CreateBlog";
import BlogByAuthor from "./components/BlogByAuthor";
import BlogListContainer from "./containers/BlogListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div> */}
        {/* <div> */}
        {/* <nav>
              Nav Bar Would Be Here
              <Link to="/">Home</Link>
              <Link to="/createBlog">Create Blog</Link>
              <Link to="/blogsByAuthor">See My Blogs</Link>
              <Link to="/bloglist">See ALL Blogs</Link>
            </nav> */}
        {/* <Router>
              <WelcomeContainer path="/" />
              <CreateBlog path="/createBlog" />
              <BlogByAuthor path="/blogsByAuthor" />
              <BlogListContainer path="/bloglist" />
            </Router>
          </div> */}
        {/* <NavBar />
          <Link to="/">Home</Link>
          <Link to="/createBlog">Create Blog</Link>
          <Link to="/blogsByAuthor">See My Blogs</Link>
          <Link to="/bloglist">See ALL Blogs</Link> */}
        {/* </div> */}
        <Router>
          {/* <MainContent path="/main">
            <Redirect from="/" to="welcome" />
            <WelcomeContainer path="welcome" />
            <CreateBlog path="/createBlog" />
            <BlogByAuthor path="/blogsByAuthor" />
            <BlogListContainer path="/bloglist" />
          </MainContent> */}
          <MainContent path="/welcome" />
          <SignInContainer path="/" />
          <CreateUserContainer path="/createuser" />
        </Router>
      </header>
    </div>
  );
}

export default App;
