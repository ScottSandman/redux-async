import React from "react";

export default function SignIn({ boundAttemptLogin }) {
  let username, password;
  console.log(boundAttemptLogin);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          boundAttemptLogin(username.value, password.value);
          username = "";
          password = "";
        }}
      >
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" ref={(node) => (username = node)} />
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
      </form>
    </div>
  );
}
