const nodemailer = require("nodemailer");
const htmlContent = require("../utils/birthdayEmail");

// Function to send birthday email
const sendBirthdayEmail = (name, email) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_EMAIL_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: `"FRIENDS CORP." < ${process.env.USER_EMAIL}>`, // Sender address
    to: email, // Recipient address
    subject: "Happy Birthday!", // Subject line
    text: `Happy Birthday, ${name}!`, // Plain text body
    html: htmlContent(name),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = sendBirthdayEmail;
