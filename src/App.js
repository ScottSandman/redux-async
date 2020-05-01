import React from "react";
import "./App.css";
import BlogListContainer from "./containers/BlogListContainer";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignIn />
        <BlogListContainer />
      </header>
    </div>
  );
}

export default App;
