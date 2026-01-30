export default function Home() {
  const hotelList = [
    { id: 1, name: 'Yash Hotels', city: 'Varanasi', price: 1500, image: 'https://imgs.search.brave.com/7RotLeHy7px6qbDCGaE2-Z4HJfCOo7KJSirgZ9yr8DU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG90ZWxzLW9mLW5l/dy1kZWxoaS5jb20v/ZGF0YS9QaG90b3Mv/MzAweDMwMHcvNjg3/My82ODczMjgvNjg3/MzI4NzA3LkpQRUc' },
    { id: 2, name: "Adil Hotels", city: "Patna", price: 1200, image: 'https://imgs.search.brave.com/syfhHlpXaTo4NFxfBu4ExDACkQUsGpN_tlreU4T590Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVudWUuZXZlbnRz/L3B1YmxpYy91cGxv/YWQvaG90ZWxnYWxs/ZXJ5LzExNDgvSG90/ZWxfSW50ZXJjaXR5/LU5ld19EZWxoaS0w/MS5qcGc' },
    { id: 3, name: "Gomti Inn", city: 'Lucknow', price: 900, image: "https://imgs.search.brave.com/OEKLFivBj81v96SDI81Lcx7Y9W8lVLFw9VgTf-yu43Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yMWlt/Z2h0bGFrLm1tdGNk/bi5jb20vN2U4MDNh/MzJlNTlkMTFlYzk3/NDMwYTU4YTlmZWFj/MDIuanBnPyZvdXRw/dXQtcXVhbGl0eT03/NSZkb3duc2l6ZT0y/NDM6MTYyJm91dHB1/dC1mb3JtYXQ9anBn"},
    { id: 4, name: 'Chacha Hotels', city: "Jharkhand", price: 1100, image: "https://imgs.search.brave.com/nPQUuv1ZvWfXhDmu15mhGiLR1_VSDcNkFH9aaNK5w3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVudWUuZXZlbnRz/L3B1YmxpYy91cGxv/YWQvaG90ZWxnYWxs/ZXJ5LzExNTgvSG90/ZWxfV2FsbnV0X0Nh/c3RsZS1OZXdfRGVs/aGktMDEuanBn" }
  ]

  const containerStyle = { fontFamily: "Arial, sans-serif", padding: '20px', maxWidth: '1200px', margin: '0 auto' }
  
  return (
    <div style={containerStyle}>
      <header style={{ borderBottom: "2px solid #333", paddingBottom: '15px',marginBottom:'30px' }}>
        <h1>Hotel Booking</h1>
      </header>

      <h2 style={{marginBottom: '20px'}}>Availabel Hotels</h2>

      <div style={{ display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: '20px' }}>
        {hotelList.map((hotel) => (
          <div key={hotel.id} style={{ border: "1px solid #ddd", padding: '15px', borderRadius: '8px' }}>
            <img src={hotel.image} alt={hotel.name} style={{width: '100%',height: '150px',objectFit: 'cover',borderRadius: '8px'}} />
            <h3>{hotel.name}</h3>
            <p style={{color: "#666", margin: '5px 0'}}>{hotel.city}</p>
            <p style={{ fontSize: "18px", fontWeight: 'bold', margin: '10px 0', color: '#2563eb' }}>
              ₹{hotel.price}/night
            </p>
            <a
              href={'/hotels/' + hotel.id}
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
              Book now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
