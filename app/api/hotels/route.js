import connectDB from '../../../lib/mongodb';
import Hotel from '../../../models/Hotel';

const initialHotels = [
  {
    hotelId: '1',
    name: 'Yash Hotels',
    location: 'Mumbai, India',
    description: 'Luxury hotel in the heart of Mumbai with modern amenities',
    image: 'https://imgs.search.brave.com/7RotLeHy7px6qbDCGaE2-Z4HJfCOo7KJSirgZ9yr8DU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG90ZWxzLW9mLW5l/dy1kZWxoaS5jb20v/ZGF0YS9QaG90b3Mv/MzAweDMwMHcvNjg3/My82ODczMjgvNjg3/MzI4NzA3LkpQRUc',
    rooms: [
      { roomId: '1', type: 'Single', price: 800, available: true },
      { roomId: '2', type: 'Double', price: 1200, available: true },
      { roomId: '3', type: 'Family', price: 2000, available: true }
    ]
  },
  {
    hotelId: '2',
    name: 'Adil Hotels',
    location: 'Delhi, India',
    description: 'Comfortable stay near Delhi airport with excellent service',
    image: 'https://imgs.search.brave.com/syfhHlpXaTo4NFxfBu4ExDACkQUsGpN_tlreU4T590Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVudWUuZXZlbnRz/L3B1YmxpYy91cGxv/YWQvaG90ZWxnYWxs/ZXJ5LzExNDgvSG90/ZWxfSW50ZXJjaXR5/LU5ld19EZWxoaS0w/MS5qcGc',
    rooms: [
      { roomId: '1', type: 'Single', price: 800, available: true },
      { roomId: '2', type: 'Double', price: 1200, available: true },
      { roomId: '3', type: 'Family', price: 2000, available: true }
    ]
  },
  {
    hotelId: '3',
    name: 'Gomti Inn',
    location: 'Lucknow, India',
    description: 'Heritage hotel with traditional hospitality near Gomti river',
    image: 'https://imgs.search.brave.com/OEKLFivBj81v96SDI81Lcx7Y9W8lVLFw9VgTf-yu43Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yMWlt/Z2h0bGFrLm1tdGNk/bi5jb20vN2U4MDNh/MzJlNTlkMTFlYzk3/NDMwYTU4YTlmZWFj/MDIuanBnPyZvdXRw/dXQtcXVhbGl0eT03/NSZkb3duc2l6ZT0y/NDM6MTYyJm91dHB1/dC1mb3JtYXQ9anBn',
    rooms: [
      { roomId: '1', type: 'Single', price: 800, available: true },
      { roomId: '2', type: 'Double', price: 1200, available: true },
      { roomId: '3', type: 'Family', price: 2000, available: true }
    ]
  },
  {
    hotelId: '4',
    name: 'Chacha Hotels',
    location: 'Bangalore, India',
    description: 'Modern hotel in Bangalore tech hub with great connectivity',
    image: 'https://imgs.search.brave.com/nPQUuv1ZvWfXhDmu15mhGiLR1_VSDcNkFH9aaNK5w3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVudWUuZXZlbnRz/L3B1YmxpYy91cGxv/YWQvaG90ZWxnYWxs/ZXJ5LzExNTgvSG90/ZWxfV2FsbnV0X0Nh/c3RsZS1OZXdfRGVs/aGktMDEuanBn',
    rooms: [
      { roomId: '1', type: 'Single', price: 800, available: true },
      { roomId: '2', type: 'Double', price: 1200, available: true },
      { roomId: '3', type: 'Family', price: 2000, available: true }
    ]
  }
];

export async function GET(req) {
  try {
    await connectDB();
    const count = await Hotel.countDocuments();
    if (count === 0) {
      await Hotel.insertMany(initialHotels);
    }
    const hotels = await Hotel.find({});
    return Response.json({ hotels });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
