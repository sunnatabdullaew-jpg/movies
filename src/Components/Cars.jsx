import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Cars').then(res => setCars(res.data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cars</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cars.map(c => (
          <li key={c.id} style={{ marginBottom: '20px', border: '1px solid #334155', padding: '15px', borderRadius: '8px' }}>
            <h2>{c.brand} {c.model}</h2>
            <p>{c.description}</p>
            <p><strong>Price:</strong> ${c.price.toLocaleString()}</p>
            <p><strong>Year:</strong> {c.year} | <strong>Fuel:</strong> {c.fuel}</p>
            <img src={c.image} alt={c.model} style={{ width: '100px', display: 'block', marginTop: '10px' }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cars