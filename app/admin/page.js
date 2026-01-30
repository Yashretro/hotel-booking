'use client';

import { useEffect, useState } from "react"

export default function AdminPage() {
  const [bookingData, setBookingData] = useState([])
  const hotelNames = { 1: "Yash", 2: 'Adil', 3: "Gomti", 4: 'Chacha' };
  const roomTypes = { 1: 'Single', 2: "Double", 3: 'Family' }

  useEffect(() => {
    fetch('/api/bookings').then((r) => r.json()).then((d) => setBookingData(d.bookings))
  }, []);

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
              <th style={{ padding: '10px', textAlign: "left" }}>ID</th>
              <th style={{ textAlign: 'left' }}>Guest</th>
              <th style={{textAlign: 'left'}}>Email</th>
              <th style={{ textAlign: "left" }}>Hotel</th>
              <th style={{ textAlign: 'left' }}>Room</th>
              <th style={{ textAlign: "left" }}>Dates</th>
              <th style={{ textAlign: 'left' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((b) => (
              <tr key={b.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: '10px' }}>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{hotelNames[b.hotelId]}</td>
                <td>{roomTypes[b.roomId]}</td>
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