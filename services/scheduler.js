const cron = require("node-cron"); // Import cron for schedular
const Customer = require("../models/customer"); // Import the Sequelize model for Customer
const sequelize = require("../models/customer").sequelize; // Import Sequelize
const sendBirthdayEmail = require("./sendBirthdayEmail"); // Import the function to send birthday emails

const checkBirthdayOfCustomers = async () => {
  try {
    const today = new Date();
    const month = today.getMonth() + 1; // Months are zero-based, so add 1
    const day = today.getDate();

    // Fetch customers whose birthday is today
    const customers = await Customer.findAll({
      where: sequelize.literal(
        `EXTRACT(MONTH FROM "birthday") = ${month} AND EXTRACT(DAY FROM "birthday") = ${day}`
      ),
    });
    customers.forEach((customer) => {
      sendBirthdayEmail(customer.name, customer.email);
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
};

// Schedule birthday wishes
cron.schedule("* * * * * *", async () => {
  await checkBirthdayOfCustomers();
});
