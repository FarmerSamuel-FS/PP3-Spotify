import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Search from "./pages/Search";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Capture the token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      setToken(token);
      localStorage.setItem("spotifyToken", token); // Optional: Store in local storage
    }
  }, []);

  return <Layout>{token ? <Search token={token} /> : <Login />}</Layout>;
}

export default App;
