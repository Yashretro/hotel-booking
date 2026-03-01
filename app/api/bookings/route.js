import connectDB from '../../../lib/mongodb';
import Booking from '../../../models/Booking';

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    
    const booking = await Booking.create({
      hotelId: body.hotelId,
      roomId: body.roomId,
      name: body.name,
      email: body.email,
      checkIn: body.checkIn,
      checkOut: body.checkOut,
      guests: body.guests,
      totalPrice: body.totalPrice
    });

    return Response.json({ success: true, booking });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    return Response.json({ bookings });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
