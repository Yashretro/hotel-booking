import connectDB from '../../../lib/mongodb';
import Booking from '../../../models/Booking';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(req) {
  try {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [BOOKING API] POST request received`);
    console.log(`[${timestamp}] [BOOKING API] MONGODB_URI exists:`, !!process.env.MONGODB_URI);
    console.log(`[${timestamp}] [BOOKING API] URI length:`, process.env.MONGODB_URI?.length || 0);
    
    await connectDB();
    console.log(`[${timestamp}] [BOOKING API] Connected to MongoDB successfully`);
    
    const body = await req.json();
    console.log(`[${timestamp}] [BOOKING API] Request body parsed:`, { hotelId: body.hotelId, name: body.name, email: body.email });
    
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

    console.log(`[${timestamp}] [BOOKING API] Booking created successfully with ID:`, booking._id);
    return Response.json({ success: true, booking });
  } catch (error) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] [BOOKING API] ERROR:`, error.message);
    console.error(`[${timestamp}] [BOOKING API] Error type:`, error.constructor.name);
    console.error(`[${timestamp}] [BOOKING API] Stack:`, error.stack);
    return Response.json({ success: false, error: error.message, type: error.constructor.name }, { status: 500 });
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
