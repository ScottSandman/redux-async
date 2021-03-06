import React from "react";
import { Link, Redirect } from "@reach/router";
import WelcomeContainer from "../containers/WelcomeContainer";
import MainContent from "./MainContent";

export default function SignIn({
  boundAttemptLogin,
  isLoggedIn,
  username,
  boundLogOut,
}) {
  let userInput, password;
  if (isLoggedIn) return <MainContent />;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          boundAttemptLogin(userInput.value, password.value);
          userInput = "";
          password = "";
        }}
      >
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" ref={(node) => (userInput = node)} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          ref={(node) => (password = node)}
        />
        <br />
        <button type="submit">Log In</button>
        <br />
        <Link to="createuser">Sign Up Here</Link>
        <br />
        <br />
      </form>
    </div>
  );
}
