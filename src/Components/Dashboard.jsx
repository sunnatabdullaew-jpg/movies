import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [stats, setStats] = useState({ products: 0, cars: 0 });

  useEffect(() => {
    axios.get('http://localhost:3000/Products').then(res => setStats(s => ({...s, products: res.data.length})));
    axios.get('http://localhost:3000/Cars').then(res => setStats(s => ({...s, cars: res.data.length})));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard Summary</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #334155', padding: '20px', borderRadius: '8px', flex: 1 }}>
          <h3>Products</h3>
          <p style={{ fontSize: '24px' }}>{stats.products}</p>
        </div>
        <div style={{ border: '1px solid #334155', padding: '20px', borderRadius: '8px', flex: 1 }}>
          <h3>Cars</h3>
          <p style={{ fontSize: '24px' }}>{stats.cars}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard