require("dotenv").config();
console.log("Environment Test - MONGO_URI:", process.env.MONGO_URI); // Add this line

const express = require("express");
const cors = require("cors");
const connectDB = require("./mongoConfig");
const userRoutes = require("./routes/routes");
const loginRoutes = require("./routes/UserLogin"); // Import the login route
const callbackRoutes = require("./routes/UserCallback"); // Import the callback route

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use("/api", userRoutes); // Use the user routes under the /api path
app.use("/", loginRoutes); // Use the login route
app.use("/", callbackRoutes); // Use the callback route

app.get("/", (req, res) => {
  res.send("Hello, PP3-Spotify!");
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
