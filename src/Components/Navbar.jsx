import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Bell, User } from 'lucide-react'

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
      marginBottom: '2rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 500 }}>Dashboard</Link>
        <Link to="/cars" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500 }}>Cars</Link>
        <Link to="/product" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500 }}>Product</Link>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#94a3b8' }}>
        <Search size={20} cursor="pointer" />
        <Bell size={20} cursor="pointer" />
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38bdf8'
        }}>
          <User size={18} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar