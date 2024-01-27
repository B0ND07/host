const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: String,
    },
    hotel: {
      type: String,
    },
    dates: [
        {
          startDate: { type: Date },
          endDate: { type: Date },
        },
      ],
    totalPrice: {
      type: Number,
    },
    phone: {
      type: Number,
    },
    roomno: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Bookings", bookingSchema);

module.exports = Booking;
