import React from "react";

const Layout = ({ children, onLogout }) => {
  return (
    <div>
      <header>
        <h1>Spotify Music Search App</h1>
        {onLogout && (
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
