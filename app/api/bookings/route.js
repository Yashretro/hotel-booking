let bookings = [];

export async function POST(req) {

  const body = await req.json();
  
  const booking = {
    id: bookings.length + 1,
    hotelId: body.hotelId,
    roomId: body.roomId,
    name: body.name,
    email: body.email,
    checkIn: body.checkIn,
    checkOut: body.checkOut,
    guests: body.guests,
    totalPrice: body.totalPrice,
    createdAt: new Date().toLocaleString(),
    
  };

  bookings.push(booking);
  return Response.json({ success: true, booking });
}

export async function GET() {
  return Response.json({ bookings });
}
