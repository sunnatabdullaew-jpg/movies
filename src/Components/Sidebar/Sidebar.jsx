import React from 'react';
import './Sidebar.css';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Box, 
  ChevronRight, 
  LogOut,
  Bell,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/Dashboard' },
    { icon: <Box size={20} />, label: 'Product', path: '/Product' },
    { icon: <Users size={20} />, label: 'Cars', path: '/Cars' },
    { icon: <Bell size={20} />, label: 'Notifications', path: '#' },
    { icon: <Settings size={20} />, label: 'Settings', path: '#' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">M</div>
          <span className="logo-text">Manager</span>
        </div>
      </div>

      <div className="search-box">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      <nav className="sidebar-nav">
        <p className="nav-label">Main Menu</p>
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.path} className="nav-link">
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">
            <img src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" alt="User" />
          </div>
          <div className="user-info">
            <p className="user-name">Sunnat</p>
            <p className="user-role">Administrator</p>
          </div>
          <button className="logout-btn">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
