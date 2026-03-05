'use client';

import { useEffect, useState } from "react"

export default function AdminPage() {
  const [bookingData, setBookingData] = useState([])
  const [hotels, setHotels] = useState({});

  useEffect(() => {
    fetch('/api/hotels', { cache: 'no-store' })
      .then(r => r.json())
      .then(d => {
        const hotelMap = {};
        d.hotels?.forEach(h => {
          hotelMap[h.hotelId] = h;
        });
        setHotels(hotelMap);
      });

    fetch('/api/bookings', { cache: 'no-store' })
      .then(r => r.json())
      .then(d => setBookingData(d.bookings || []));
  }, []);

  const getHotelName = (hotelId) => hotels[hotelId]?.name || 'Hotel ' + hotelId;
  const getRoomType = (hotelId, roomId) => {
    const hotel = hotels[hotelId];
    const room = hotel?.rooms?.find(r => r.roomId === roomId);
    return room?.type || 'Room ' + roomId;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: '20px' }}>
      <a href='/' style={{ color: "#2563eb" }}>← Home</a>
      <h1>All Bookings</h1>
      {bookingData.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse',marginTop: '20px' }}>
          <thead>
            <tr style={{ background: "#f5f5f5", borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '10px', textAlign: "left" }}>Guest</th>
              <th style={{textAlign: 'left'}}>Email</th>
              <th style={{ textAlign: "left" }}>Hotel</th>
              <th style={{ textAlign: 'left' }}>Room</th>
              <th style={{ textAlign: "left" }}>Dates</th>
              <th style={{ textAlign: 'left' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((b) => (
              <tr key={b._id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: '10px' }}>{b.name}</td>
                <td>{b.email}</td>
                <td>{getHotelName(b.hotelId)}</td>
                <td>{getRoomType(b.hotelId, b.roomId)}</td>
                <td>{b.checkIn} → {b.checkOut}</td>
                <td style={{ fontWeight: "bold", color: '#2563eb' }}>₹{b.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}