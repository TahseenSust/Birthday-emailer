// index.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const scheduler = require("./services/scheduler"); // Import the scheduler service
const customer = require("./routes/customer");
const sequelize = require("./models/customer");

app.use(bodyParser.json());

// Sync Sequelize with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

// customer routes
app.use("/customer", customer);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
