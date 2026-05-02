import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserCard.css';

export default function UserCard({ user }) {
  const navigate = useNavigate();

  // Get initials from name
  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('');

  // Pick a consistent color based on user id
  const colors = ['#e85d26', '#2d6be4', '#16a34a', '#9333ea', '#db2777', '#0891b2'];
  const color = colors[user.id % colors.length];

  return (
    <div
      className="user-card"
      onClick={() => navigate(`/user/${user.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && navigate(`/user/${user.id}`)}
    >
      <div className="user-card-left">
        <div className="user-avatar" style={{ background: color }}>
          {initials}
        </div>
        <div className="user-info">
          <h3 className="user-name">{user.name}</h3>
          <p className="user-email">{user.email}</p>
        </div>
      </div>

      <div className="user-card-right">
        <span className="user-city">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {user.address.city}
        </span>
        <span className="user-arrow">→</span>
      </div>
    </div>
  );
}
