# PP3-Spotify: Music Search App

## Project Overview

This project is a music search application built with React on the frontend and Express on the backend. The app integrates with Spotify's REST Web API to allow users to search for artists, albums, and tracks. Users can view search results and link out to the Spotify web player directly from the application.

The key features of this project include:

- **Login/Authentication**: Users must log in using their Spotify credentials. If a valid JWT (JSON Web Token) is stored, the user will be automatically logged in and redirected to the search page.
- **Search Functionality**: Users can search for artists, albums, and tracks using the Spotify API.
- **No Results Message**: If no search is performed or no results are found, a 'no results' message will be displayed.
- **Spotify Web Player Links**: Each search result will link out to the Spotify web player for that item.
- **Decoupled Frontend and Backend**: The frontend application is fully decoupled from the backend, which handles JWT management and API calls.
- **Secure Credentials**: All application secret credentials are securely stored and not visible in the repository.

The application's user interface (UI) and user experience (UX) will either follow a custom design created in Week 1 or the design provided in the course materials.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher
- **React**: Installed as a dependency
- **Express**: Installed as a dependency
- **Spotify Developer Account**: Sign up at [Spotify Developer](https://developer.spotify.com/) and agree to their terms of use to gain access to the API.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Installation

1. **Clone the Repository**:
   git clone https://github.com/FarmerSamuel-FS/PP3-Spotify.git
Navigate to the Project Directory:

cd PP3-Spotify
Install Dependencies:

npm install
Set Up Environment Variables:
Create a .env file in the root directory and add the necessary environment variables:

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
JWT_SECRET=your_jwt_secret
Run the Backend Server:

npm run server
Run the Frontend Application:

npm start
Usage
Once the application is running:

Open your browser and navigate to http://localhost:3001.
If prompted, log in using your Spotify credentials.
Use the search bar to find artists, albums, or tracks.
Click on any result to open it in the Spotify web player.
Links

Local Development URL: http://localhost:3001
Staging URL: [Add your staging URL here]
Production URL: [Add your production URL here]
GitHub Repository: https://github.com/FarmerSamuel-FS/PP3-Spotify
