export default async function HotelDetails({ params }) {
  const hotelId = (await params).id;
  
  const hotelNames = { 1: "Yash Hotels", 2: 'Adil Hotels', 3: "Gomti Inn", 4: 'Chacha Hotels' };
  const roomsList = [{ id: 1, type: "Single", price: 800 }, { id: 2, type: 'Double', price: 1200 }, { id: 3, type: "Family", price: 2000 }]

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <a href='/' style={{ color: "#2563eb" }}>← Back</a>
      <h1>{hotelNames[hotelId]}</h1>
      <h2 style={{marginTop: '25px'}}>Available Rooms</h2>
      {roomsList.map((room) => (
        <div key={room.id} style={{ border: "1px solid #ddd", padding: '15px',marginBottom:'10px', display: 'flex', justifyContent: "space-between" }}>
          <div>
            <h3 style={{margin: 0}}>{room.type}</h3>
            <p style={{ color: "#2563eb", fontWeight: 'bold', margin: '5px 0' }}>\u20b9{room.price}/night</p>
          </div>
          <a href={'/booking?hotel=' + hotelId + '&room=' + room.id} style={{ padding: "10px 20px", backgroundColor: '#2563eb', color: 'white', textDecoration: "none", borderRadius: '3px' }}>Book</a>
        </div>
      ))}
    </div>
  );
}
