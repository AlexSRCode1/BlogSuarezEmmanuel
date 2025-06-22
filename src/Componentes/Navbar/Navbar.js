import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#121212', borderBottom: '3px solid #ff6700' }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/" style={{ color: '#ff6700' }}>
          🎮 Blog Gamer
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link text-warning fw-semibold" style={navStyle}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link text-warning fw-semibold" style={navStyle}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link text-warning fw-semibold" style={navStyle}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const navStyle = ({ isActive }) => ({
  color: isActive ? '#ffa042' : '#ff6700',
  borderBottom: isActive ? '2px solid #ffa042' : 'none',
  transition: 'all 0.3s ease-in-out',
});
