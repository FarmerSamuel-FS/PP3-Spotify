# PP3-Spotify: Music Search App

## Project Overview

This project is a music search application built with React on the frontend and Express on the backend. The app integrates with Spotify's REST Web API to allow users to search for artists, albums, and tracks. Currently, the frontend displays user database information, but the ultimate goal is to provide a seamless Spotify music search experience with user authentication, JWT-based security, and interactive UI.

### **Project Vision**

- **Spotify Authentication with JWT**: Users will log in using their Spotify credentials. The app will use Spotify's OAuth 2.0 Authorization Code flow, with Passport.js and JWT to securely authenticate users and manage sessions.
- **Music Search Functionality**: Users will search for artists, albums, and tracks using the Spotify API, and the results will be displayed dynamically on the frontend.
- **Interactive UI**: The UI will be updated to provide an intuitive and visually appealing experience, including Spotify web player links directly within search results.
- **Secure Credential Management**: All secret credentials will be securely stored in environment variables and not visible in the repository.

## Current Progress

### Completed Features

- **User Management**: The frontend currently displays user information stored in the database at `localhost:3000`.
- **Spotify Authentication**: Spotify login is working at `localhost:3001/login`, using Passport.js and JWT for secure authentication.
- **Token Management**: JWT is implemented, and tokens are securely handled, including testing with invalid tokens.

### Next Steps

- **Integrate Spotify API**: Implement the ability to search for artists, albums, and tracks directly from the frontend.
- **Update Frontend**: Replace the current user list display with Spotify search results and integrate the Spotify web player links.
- **Handle Token Expiration**: Implement token refresh logic to maintain session persistence without requiring frequent re-authentication.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher
- **React**: Installed as a dependency
- **Express**: Installed as a dependency
- **Spotify Developer Account**: Sign up at [Spotify Developer](https://developer.spotify.com/) to obtain the necessary API credentials.
- **MongoDB**: Installed and running locally or on a cloud service like MongoDB Atlas.

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
Copy the contents of .env.dist to a new file named .env in the root of the project and fill in the required values.
cp .env.dist .env

Running the Application

Run the Backend Server:
npm run server

Run the Frontend Application:
npm start

Testing

Spotify Login:
Access the Spotify login by navigating to http://localhost:3001/login.
After logging in with Spotify, you will be redirected to the callback route.

View User Information:
The frontend at http://localhost:3000 currently displays user information from the database.
Roadmap to Completion

Future Enhancements

Spotify API Integration: Implement the ability to search Spotify's catalog directly from the frontend, display results, and provide Spotify web player links.

Responsive Design: Ensure the UI is responsive and works well on various devices, including mobile.

User Dashboard: Create a personalized user dashboard that displays favorite artists, recently played tracks, and other personalized Spotify data.
Environment Variables

The application requires several environment variables for configuration. These variables should be stored in a .env file in the root directory.

Here's a template of the required variables, which is provided in the .env.dist file:

# MongoDB connection URI

MONGO_URI=mongodb://localhost:27017/pp3spotify

# Express server port

PORT=3001

# Spotify API credentials

SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
SPOTIFY_REDIRECT_URI=http://localhost:3001/callback

# JWT secret for signing tokens

JWT_SECRET=your_jwt_secret_key_here

## Links:

Local Backend URL: http://localhost:3001
Frontend URL: http://localhost:3000
GitHub Repository: https://github.com/FarmerSamuel-FS/PP3-Spotify
