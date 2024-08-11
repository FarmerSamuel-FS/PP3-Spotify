require("dotenv").config();
const express = require("express");
const connectDB = require("./mongoConfig");
const userRoutes = require("./routes/routes"); // Import the user routes
const app = express();

connectDB();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use("/api", userRoutes); // Use the user routes under the /api path

app.get("/", (req, res) => {
  res.send("Hello, PP3-Spotify!");
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
