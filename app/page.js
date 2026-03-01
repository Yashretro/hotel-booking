'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hotels')
      .then(res => res.json())
      .then(data => {
        setHotels(data.hotels || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const containerStyle = { fontFamily: "Arial, sans-serif", padding: '20px', maxWidth: '1200px', margin: '0 auto' }
  
  if (loading) {
    return <div style={containerStyle}><p>Loading hotels...</p></div>;
  }

  return (
    <div style={containerStyle}>
      <header style={{ borderBottom: "2px solid #333", paddingBottom: '15px',marginBottom:'30px' }}>
        <h1>Hotel Booking</h1>
      </header>

      <h2 style={{marginBottom: '20px'}}>Available Hotels</h2>

      <div style={{ display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: '20px' }}>
        {hotels.map((hotel) => (
          <div key={hotel.hotelId} style={{ border: "1px solid #ddd", padding: '15px', borderRadius: '8px' }}>
            <img src={hotel.image} alt={hotel.name} style={{width: '100%',height: '150px',objectFit: 'cover',borderRadius: '8px', marginBottom: '10px'}} />
            <h3>{hotel.name}</h3>
            <p style={{color: "#666", margin: '5px 0'}}>{hotel.location}</p>
            <p style={{ fontSize: "14px", margin: '10px 0', color: '#555' }}>
              {hotel.description}
            </p>
            <a
              href={'/hotels/' + hotel.hotelId}
              style={{
                display: "inline-block",
                marginTop: '10px',
                padding: "10px 15px",
                backgroundColor: '#2563eb',
                color: "white",
                textDecoration: 'none',
                borderRadius: '5px'
              }}
            >
              View Rooms
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
