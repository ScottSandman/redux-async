import React from "react";

export default function SignIn({
  boundAttemptLogin,
  isLoggedIn,
  username,
  boundLogOut,
}) {
  let userInput, password;
  if (isLoggedIn)
    return (
      <div>
        <div>Welcome, {username} You are logged in.</div>
        <button type="submit" onClick={() => boundLogOut()}>
          Log Out
        </button>
      </div>
    );
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
      </form>
    </div>
  );
}
