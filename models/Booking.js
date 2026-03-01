import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  hotelId: { type: String, required: true },
  roomId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  guests: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
