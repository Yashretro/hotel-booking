'use client';

import { useState, useEffect } from 'react';

export default function HotelDetails({ params }) {
  const [hotelId, setHotelId] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then(p => setHotelId(p.id));
  }, [params]);

  useEffect(() => {
    if (!hotelId) return;
    
    fetch('/api/hotels')
      .then(res => res.json())
      .then(data => {
        const foundHotel = data.hotels?.find(h => h.hotelId === hotelId);
        setHotel(foundHotel);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [hotelId]);

  if (loading || !hotel) {
    return <div style={{ fontFamily: "Arial, sans-serif", padding: '20px' }}>Loading...</div>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <a href='/' style={{ color: "#2563eb" }}>← Back</a>
      <h1>{hotel.name}</h1>
      <p style={{ color: '#666', fontSize: '16px' }}>{hotel.location}</p>
      <p style={{ margin: '15px 0' }}>{hotel.description}</p>
      
      <h2 style={{marginTop: '25px'}}>Available Rooms</h2>
      {hotel.rooms?.map((room) => (
        <div key={room.roomId} style={{ border: "1px solid #ddd", padding: '15px',marginBottom:'10px', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
          <div>
            <h3 style={{margin: 0}}>{room.type}</h3>
            <p style={{ color: "#2563eb", fontWeight: 'bold', margin: '5px 0' }}>₹{room.price}/night</p>
            {!room.available && <span style={{color: '#dc2626', fontSize: '14px'}}>Not Available</span>}
          </div>
          <a 
            href={'/booking?hotel=' + hotelId + '&room=' + room.roomId} 
            style={{ 
              padding: "10px 20px", 
              backgroundColor: room.available ? '#2563eb' : '#ccc', 
              color: 'white', 
              textDecoration: "none", 
              borderRadius: '3px',
              pointerEvents: room.available ? 'auto' : 'none'
            }}
          >
            Book
          </a>
        </div>
      ))}
    </div>
  );
}
