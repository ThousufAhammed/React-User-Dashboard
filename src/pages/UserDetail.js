import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UserContext';
import Loader from '../components/Loader';
import './UserDetail.css';

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, loading, error } = useUsers();

  const user = users.find(u => u.id === parseInt(id));

  if (loading) return <Loader />;

  if (error) {
    return (
      <main className="detail">
        <div className="error-box">
          <span>⚠</span>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="detail">
        <div className="not-found">
          <p className="not-found-icon">👤</p>
          <h2>User not found</h2>
          <button className="back-btn" onClick={() => navigate('/')}>← Go Back</button>
        </div>
      </main>
    );
  }

  // Initials & color
  const initials = user.name.split(' ').map(n => n[0]).slice(0, 2).join('');
  const colors = ['#e85d26', '#2d6be4', '#16a34a', '#9333ea', '#db2777', '#0891b2'];
  const color = colors[user.id % colors.length];

  const details = [
    { label: 'Email', value: user.email, icon: '✉' },
    { label: 'Phone', value: user.phone, icon: '📞' },
    { label: 'Company', value: user.company.name, icon: '🏢' },
    { label: 'Website', value: user.website, icon: '🌐' },
    { label: 'City', value: user.address.city, icon: '📍' },
  ];

  return (
    <main className="detail">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Go Back
      </button>

      <div className="detail-card">
        {/* Avatar */}
        <div className="detail-avatar-wrap">
          <div className="detail-avatar" style={{ background: color }}>
            {initials}
          </div>
        </div>

        <div className="detail-header">
          <h1 className="detail-name">{user.name}</h1>
          <p className="detail-handle">@{user.username}</p>
        </div>

        <div className="detail-divider" />

        <ul className="detail-list">
          {details.map(item => (
            <li key={item.label} className="detail-item">
              <span className="detail-icon">{item.icon}</span>
              <div className="detail-text">
                <span className="detail-label">{item.label}</span>
                <span className="detail-value">{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
