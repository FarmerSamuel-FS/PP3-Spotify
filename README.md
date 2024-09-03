# PP3-Spotify Music Search App

## Project Overview

The PP3-Spotify Music Search App is a web application that allows users to search for artists, albums, and tracks using the Spotify API. Users can log in with their Spotify credentials, perform searches, and click on results to open them directly in Spotify’s web player.

This project was created as part of a class assignment to demonstrate the integration of Spotify’s API with a React frontend and an Express backend. The application is designed to showcase a full-stack development approach using modern web technologies.

## Features

    •	Spotify OAuth Authentication: Securely log in using your Spotify account.
    •	Search Functionality: Search for albums, artists, and tracks.
    •	Clickable Links: Open albums, artists, and tracks directly in Spotify’s web player.
    •	Responsive UI: A modern dark-themed design that works across various devices.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

    •	Node.js (version 14.x or later)
    •	npm (comes with Node.js) or yarn
    •	MongoDB (local or cloud instance)
    •	Spotify Developer Account

## Project Structure

The project is divided into two main directories:

    •	client/spotify/: Contains the React frontend application.
    •	server/: Contains the Express backend application.

## Getting Started

1. Clone the Repository

Start by cloning the repository to your local machine:

git clone https://github.com/your-username/PP3-Spotify.git
cd PP3-Spotify

2. Install Dependencies

Install dependencies for both the server and client: # Install server dependencies

    cd server
    npm install

    # Install client dependencies

    cd ../client
    npm install

3. \*\*Setup Environment Variables: - Create a .env file in the server/ directory with the following contents:

   MONGO_URI=mongodb://localhost:27017/pp3-spotify
   PORT=3001
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_REDIRECT_URI=http://localhost:3001/auth/callback
   JWT_SECRET=your_jwt_secret
   SESSION_SECRET=your_session_secret

Replace the placeholders with your actual Spotify credentials and secrets.

4. Start the Application

This will start the client on http://localhost:3000 and the server on http://localhost:3001.

npm run dev

5. Access the Application

Open your browser and navigate to http://localhost:3000 to access the application. You will be prompted to log in with your Spotify account.

## Usage

## Login

    •	Click the “Login with Spotify” button to authenticate with your Spotify account.
    •	Upon successful login, you will be redirected to the search page.

## Search

    •	Enter a search term in the input field (e.g., “Queen”) and click “Search”.
    •	The application will display albums, artists, and tracks related to your search term.

## Click on Results

    •	Each result (album, artist, or track) is clickable and will open the corresponding Spotify page in a new tab.

## Troubleshooting

Common Issues

    •	504 Gateway Timeout: If you encounter this error when clicking on a link, it may be due to temporary issues with Spotify’s servers. Try refreshing the page or searching for another term.
    •	Login Issues: Ensure your Spotify developer credentials are correct in the .env file.
    •	MongoDB Connection: Make sure your MongoDB instance is running and accessible via the MONGO_URI you provided.

Logging

The server logs provide useful information for debugging and can be found in the terminal where the server is running. Check the logs for errors related to Spotify API requests, JWT authentication, or MongoDB connections.

Contributing

This project is part of a class assignment, but contributions for learning purposes are welcome. If you find an issue or have a suggestion, feel free to fork the repository and create a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgments

    •	Spotify API Documentation
    •	Create React App
    •	Express.js Documentation

Additional Notes for Classmates:

    •	Ensure that your Spotify Developer credentials are set up correctly in the .env file.
    •	The MongoDB instance can be local or cloud-based (e.g., MongoDB Atlas).
    •	If you encounter any issues, check the console logs in both the browser (for client-side issues) and the terminal (for server-side issues).

his will start the client on http://localhost:3000 and the server on http://localhost:3001.

5. Access the Application

Open your browser and navigate to http://localhost:3000 to access the application. You will be prompted to log in with your Spotify account.

Usage

Login

    •	Click the “Login with Spotify” button to authenticate with your Spotify account.
    •	Upon successful login, you will be redirected to the search page.

Search

    •	Enter a search term in the input field (e.g., “Queen”) and click “Search”.
    •	The application will display albums, artists, and tracks related to your search term.

Click on Results

    •	Each result (album, artist, or track) is clickable and will open the corresponding Spotify page in a new tab.

Troubleshooting

Common Issues

    •	504 Gateway Timeout: If you encounter this error when clicking on a link, it may be due to temporary issues with Spotify’s servers. Try refreshing the page or searching for another term.
    •	Login Issues: Ensure your Spotify developer credentials are correct in the .env file.
    •	MongoDB Connection: Make sure your MongoDB instance is running and accessible via the MONGO_URI you provided.

Logging

The server logs provide useful information for debugging and can be found in the terminal where the server is running. Check the logs for errors related to Spotify API requests, JWT authentication, or MongoDB connections.

Contributing

This project is part of a class assignment, but contributions for learning purposes are welcome. If you find an issue or have a suggestion, feel free to fork the repository and create a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgments

    •	Spotify API Documentation
    •	Create React App
    •	Express.js Documentation

Additional Notes for Classmates:

    •	Ensure that your Spotify Developer credentials are set up correctly in the .env file.
    •	The MongoDB instance can be local or cloud-based (e.g., MongoDB Atlas).
    •	If you encounter any issues, check the console logs in both the browser (for client-side issues) and the terminal (for server-side issues).
