import React from "react";

export default function Welcome({ username }) {
  return (
    <div>
      <div>Welcome {username}! You are logged in.</div>
      {/* <button type="submit" onClick={() => boundLogOut()}>
        Log Out
      </button> */}
    </div>
  );
}
