import connectDB from '../../../../lib/mongodb';
import Hotel from '../../../../models/Hotel';

export async function POST(req) {
  try {
    await connectDB();
    await Hotel.deleteMany({});
    return Response.json({ success: true, message: 'Hotels cleared. Refresh /api/hotels to reseed.' });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
