# PP3-Spotify: Music Search App

## Project Overview

PP3-Spotify is a music search application built with React on the frontend and Express on the backend. The app integrates with Spotify's REST Web API to allow users to search for artists, albums, and tracks. The ultimate goal is to provide a seamless Spotify music search experience with user authentication, JWT-based security, and an interactive UI.

### **Project Vision**

- **Spotify Authentication with JWT**: Users log in using their Spotify credentials, with secure authentication handled via Spotify's OAuth 2.0 Authorization Code flow, Passport.js, and JWT.
- **Music Search Functionality**: Users search for artists, albums, and tracks using the Spotify API, with results dynamically displayed on the frontend.
- **Interactive UI**: An intuitive and visually appealing user interface, featuring Spotify web player links directly within search results.
- **Secure Credential Management**: All sensitive credentials are securely stored in environment variables and not visible in the repository.

## Current Progress

### **Completed Features**

- **User Management**: The frontend currently displays user information stored in the database at `localhost:3000`.
- **Spotify Authentication**: Spotify login is operational at `localhost:3001/login`, using Passport.js and JWT for secure authentication.
- **Token Management**: JWT is implemented for secure token handling, with validation logic for invalid tokens.

### **Next Steps**

- **Implement Spotify API Integration**: Create an API route to handle search queries and retrieve results from Spotify’s catalog.
- **Update Frontend**: Replace the current user list with Spotify search results, and integrate Spotify web player links.
- **Token Expiration Handling**: Add token refresh logic to maintain session persistence and a smooth user experience.

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
   ```bash
   git clone https://github.com/FarmerSamuel-FS/PP3-Spotify.git
   Navigate to the Project Directory:
   cd PP3-Spotify
   ```

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

Spotify Login: Access the Spotify login by navigating to http://localhost:3001/login. After logging in, you will be redirected to the callback route.

Search for Music: Once the search functionality is implemented, test the ability to search Spotify’s catalog directly from the frontend.

Roadmap to Completion

Future Enhancements
Spotify API Integration: Implement the ability to search Spotify's catalog directly from the frontend, display results, and provide Spotify web player links.
Responsive Design: Ensure the UI is responsive and works well on various devices, including mobile.
User Dashboard: Create a personalized user dashboard that displays favorite artists, recently played tracks, and other personalized Spotify data.
Environment Variables

The application requires several environment variables for configuration. These variables should be stored in a .env file in the root directory.

Here’s a template of the required variables, which is provided in the .env.dist file:

bash
Copy code

# MongoDB connection URI

MONGO_URI=mongodb://localhost:27017/pp3spotify

# Express server port

PORT=3001

# Spotify API credentials

SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
SPOTIFY_REDIRECT_URI=http://localhost:3001/auth/callback

# JWT secret for signing tokens

JWT_SECRET=your_jwt_secret_key_here
Links:

Local Backend URL: http://localhost:3001
Frontend URL: http://localhost:3000
GitHub Repository: PP3-Spotify
sql
Copy code

This README file reflects your current progress and what remains to be done, providing clear instructions for anyone working on the project.

### **Next Steps**

- **Focus on implementing the Spotify API search functionality** on the backend and ensuring it integrates smoothly with the frontend.
- **Complete the frontend components** for displaying search results, handling user authentication, and managing sessions.

If you need further assistance with any of these steps, feel free to ask!
