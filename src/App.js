import React from "react";
import "./App.css";
import BlogListContainer from "./containers/BlogListContainer";
import SignInContainer from "./containers/SignInContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignInContainer />
        <BlogListContainer />
      </header>
    </div>
  );
}

export default App;
