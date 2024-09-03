import React from "react";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/auth/login";
  };

  return (
    <div>
      <h2>Login to Spotify</h2>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default Login;
