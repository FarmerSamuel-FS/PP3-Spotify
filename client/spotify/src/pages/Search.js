import React, { useState } from "react";
import axios from "axios";

const Search = ({ token }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/search?q=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setResults(response.data.albums.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for music..."
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {results.map((album) => (
          <div key={album.id}>
            <p>
              {album.name} by {album.artists[0].name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
