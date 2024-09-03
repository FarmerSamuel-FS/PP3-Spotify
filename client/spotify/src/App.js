import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Search from "./pages/Search";
import "./App.css";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token =
      urlParams.get("token") || localStorage.getItem("spotifyToken");

    if (token) {
      setToken(token);
      localStorage.setItem("spotifyToken", token);
    }
  }, []);

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("spotifyToken");
    window.location.href = "/"; // Redirect to the home/login page
  };

  return (
    <Layout onLogout={token ? handleLogout : null}>
      {token ? <Search token={token} /> : <Login />}
    </Layout>
  );
}

export default App;
