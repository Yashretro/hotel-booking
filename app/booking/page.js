'use client';

import { useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';

function BookingFormContent() {
  const searchParams = useSearchParams();
  const hotelId = searchParams.get('hotel');
  const roomId = searchParams.get("room");

  const [formData, setFormData] = useState({ checkIn: '', checkOut: '', guests: 1, name: '', email: '' });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const hotelNames = { 1: "Yash Hotels", 2: 'Adil Hotels', 3: "Gomti Inn", 4: 'Chacha Hotels' }
  const roomTypes = { 1: { type: "Single", price: 800 }, 2: { type: 'Double', price: 1200 }, 3: { type: "Family", price: 2000 } };

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErr('')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.checkIn || !formData.checkOut || !formData.name || !formData.email) {
      setErr("All fields requierd");
      return;
    }

    setLoading(true);
    
    const nights = Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * roomTypes[roomId].price;

    try {
      await fetch('/api/bookings', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hotelId, roomId, ...formData, totalPrice }),
      });
      alert('Booking confirmed! View at /admin');
      setFormData({ checkIn: '', checkOut: '', guests: 1, name: '', email: '' });
    } catch (err) {
      setErr("Error saving booking");
    }
    
    setLoading(false)
  };

  const selectedRoom = roomTypes[roomId];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <a href={'/hotels/' + hotelId} style={{ color: "#2563eb" }}>← Back</a>

      <h1>Booking</h1>

      <div style={{background: '#f5f5f5', padding: '15px',borderRadius: '5px',marginBottom: '20px'}}>
        <p><strong>Hotel:</strong> {hotelNames[hotelId]}</p>
        <p><strong>Room:</strong> {selectedRoom.type} - ₹{selectedRoom.price}/night</p>
      </div>

      <form onSubmit={handleSubmit} style={{ background: "#fff", border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
        <div style={{marginBottom: '15px'}}>
          <label style={{ fontWeight: "bold" }}>Check-in *</label>
          <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} style={{ width: '100%', padding: '8px',marginTop: '5px', borderRadius: '3px', border: "1px solid #ddd" }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{fontWeight: 'bold'}}>Check-out *</label>
          <input type='date' name='checkOut' value={formData.checkOut} onChange={handleChange} style={{width: '100%',padding: '8px', marginTop: '5px',borderRadius: '3px',border: '1px solid #ddd'}} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: 'bold' }}>Guests *</label>
          <select name="guests" value={formData.guests} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '3px', border: '1px solid #ddd' }}>
            {[1, 2, 3, 4].map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{fontWeight: "bold"}}>Name *</label>
          <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder="Your name" style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '3px', border: '1px solid #ddd' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Email *</label>
          <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your email' style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '3px', border: '1px solid #ddd' }} />
        </div>

        {err && <p style={{ color: "#dc2626", marginBottom: '15px' }}>{err}</p>}

        <button type='submit' disabled={loading} style={{ width: '100%', padding: '10px', backgroundColor: loading ? '#ccc' : '#2563eb', color: 'white', border: 'none', borderRadius: '3px', fontWeight: "bold", cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Processing...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>}>
      <BookingFormContent />
    </Suspense>
  );
}
