const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendBookingEmail = async (email, ticket) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: [email, "venugopal.burli@masaischool.com"],
    subject: "Ticket Booking Confirmation",
    text: `Your ticket from ${ticket.from} to ${ticket.to} on ${ticket.dateOfTravel} has been booked.`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendBookingEmail };