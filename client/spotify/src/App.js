import React from "react";
import UserList from "./components/UserList"; // Import the UserList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to PP3-Spotify</h1>
        <UserList /> {/* Render the UserList component here */}
      </header>
    </div>
  );
}

export default App;
