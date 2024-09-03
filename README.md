# PP3-Spotify Music Search App

## Project Overview

PP3-Spotify Music Search App is a web application that allows users to search for music through Spotify's API. The application is built with a React frontend and an Express backend, integrating Spotify's REST Web API for a seamless music search experience. It features user authentication through Spotify's OAuth 2.0 flow, secured with JWT.

### **Project Vision**

- **Spotify Authentication with JWT**: Users can log in using their Spotify credentials, with secure authentication handled via Spotify's OAuth 2.0, Passport.js, and JWT.
- **Music Search Functionality**: Users can search for artists, albums, and tracks using the Spotify API, with results dynamically displayed on the frontend.
- **Interactive UI**: The application features an intuitive and visually appealing user interface, allowing users to interact with their search results.
- **Secure Credential Management**: Sensitive credentials are securely stored in environment variables and not exposed in the repository.

## Current Progress

### **Completed Features**

- **Spotify Authentication**: Users can log in via Spotify, with JWT securely generated and stored in MongoDB.
- **Token Management**: JWT is implemented for secure token handling, with validation logic for expired tokens.
- **Spotify API Search**: Backend route `/api/search` allows users to query the Spotify catalog for albums, artists, and tracks, returning relevant search results.

### **Next Steps**

- **Frontend Implementation**: Develop the frontend components to display search results, manage user sessions, and handle user authentication.
- **Responsive Design**: Ensure the UI is responsive and works well on various devices, including mobile.
- **Additional Features**: Create a user dashboard to display favorite artists, recently played tracks, and personalized Spotify data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher
- **React**: Installed as a dependency
- **Express**: Installed as a dependency
- **Spotify Developer Account**: Sign up at [Spotify Developer](https://developer.spotify.com/) to obtain the necessary API credentials.
- **MongoDB**: Installed and running locally or on a cloud service like MongoDB Atlas.

## Getting Started

### **Installation**

1. **Clone the Repository**:
   `git clone https://github.com/FarmerSamuel-FS/SpotifyMusicApp.git`
2. **Navigate to the Project Directory**:
   `cd SpotifyMusicApp`

3. **Install Dependencies**:
   `npm install`

4. **Set Up Environment Variables**:
   Copy the contents of `.env.dist` to a new file named `.env` in the root of the project and fill in the required values.
   `cp .env.dist .env`

### **Running the Application**

1. **Run the Backend Server**:
   `npm run server`

2. **Run the Frontend Application**:
   `npm start`

### **Testing**

1. **Spotify Login**: Access the Spotify login by navigating to `http://localhost:3001/auth/login`. After logging in, you will be redirected to the callback route.

2. **Search for Music**: Use Postman or the frontend UI to query the Spotify API for music by artists, albums, or tracks.

## Roadmap to Completion

### **Future Enhancements**

- **User Dashboard**: Create a personalized user dashboard that displays favorite artists, recently played tracks, and other personalized Spotify data.
- **Advanced Search Filters**: Implement additional filters for more refined search results, such as genre, release date, and popularity.
- **Playlist Management**: Allow users to create and manage Spotify playlists directly from the app.

## Environment Variables

The application requires several environment variables for configuration. These variables should be stored in a `.env` file in the root directory.

Here’s a template of the required variables, which is provided in the `.env.dist` file:

## MongoDB connection URI

MONGO_URI=mongodb://localhost:27017/pp3-spotify

## Express server port

PORT=3001

## Spotify API credentials

SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
SPOTIFY_REDIRECT_URI=http://localhost:3001/auth/callback

## JWT secret for signing tokens

JWT_SECRET=your_jwt_secret_key_here
