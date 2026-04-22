import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Products').then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(p => (
          <li key={p.id} style={{ marginBottom: '20px', border: '1px solid #334155', padding: '15px', borderRadius: '8px' }}>
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <p><strong>Price:</strong> ${p.price}</p>
            <img src={p.image} alt={p.name} style={{ width: '100px', display: 'block', marginTop: '10px' }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product