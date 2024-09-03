import React, { useState } from "react";
import axios from "axios";

const Search = ({ token }) => {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query) {
      console.log("Query is empty.");
      setError("Please enter a search term.");
      return;
    }

    console.log("Searching for:", query);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:3001/api/search?q=${query}&type=album,artist,track`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const albumsData = response.data.albums?.items || [];
      const artistsData = response.data.artists?.items || [];
      const tracksData = response.data.tracks?.items || [];

      setAlbums(albumsData);
      setArtists(artistsData);
      setTracks(tracksData);

      if (!albumsData.length && !artistsData.length && !tracksData.length) {
        setError(
          "No results found for albums, artists, or tracks. Please try a different search term.",
        );
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError(
        "There was an error fetching the search results. Please try again later.",
      );
    }
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for music..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {albums.length > 0 && (
        <div className="results-section">
          <h2>Albums</h2>
          <div className="result-container">
            {albums.map((album) => (
              <a
                className="result-item"
                href={album.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                key={album.id}
              >
                <img src={album.images[0]?.url || ""} alt={album.name} />
                <p>
                  {album.name} by{" "}
                  {album.artists.map((artist) => artist.name).join(", ")}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {artists.length > 0 && (
        <div className="results-section">
          <h2>Artists</h2>
          <div className="result-container">
            {artists.map((artist) => (
              <a
                className="result-item"
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                key={artist.id}
              >
                <img src={artist.images[0]?.url || ""} alt={artist.name} />
                <p>{artist.name}</p>
              </a>
            ))}
          </div>
        </div>
      )}

      {tracks.length > 0 && (
        <div className="results-section">
          <h2>Tracks</h2>
          <div className="result-container">
            {tracks.map((track) => (
              <a
                className="result-item"
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                key={track.id}
              >
                <img src={track.album.images[0]?.url || ""} alt={track.name} />
                <p>
                  {track.name} by{" "}
                  {track.artists.map((artist) => artist.name).join(", ")}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
