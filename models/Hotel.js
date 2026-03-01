import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema(
  {
    roomId: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true }
  },
  { _id: false }
);

const HotelSchema = new mongoose.Schema({
  hotelId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  rooms: { type: [RoomSchema], default: [] }
});

export default mongoose.models.Hotel || mongoose.model('Hotel', HotelSchema);
