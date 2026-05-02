import React from 'react';
import { useUsers } from '../context/UserContext';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import './Home.css';

export default function Home() {
  const {
    loading,
    error,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    filteredUsers,
    paginatedUsers,
  } = useUsers();

  return (
    <main className="home">
      {/* Header */}
      <section className="home-header">
        <div className="home-header-text">
          <h1 className="home-title">Team Directory</h1>
          <p className="home-subtitle">
            {filteredUsers.length} member{filteredUsers.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="controls">
        <div className="search-wrapper">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search by name…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        <div className="sort-buttons">
          <button
            className={`sort-btn ${sortOrder === 'asc' ? 'active' : ''}`}
            onClick={() => setSortOrder('asc')}
          >
            A → Z
          </button>
          <button
            className={`sort-btn ${sortOrder === 'desc' ? 'active' : ''}`}
            onClick={() => setSortOrder('desc')}
          >
            Z → A
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="user-list">
        {loading && <Loader />}

        {error && (
          <div className="error-box">
            <span className="error-icon">⚠</span>
            <div>
              <p className="error-title">Oops, something went wrong</p>
              <p className="error-msg">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && paginatedUsers.length === 0 && (
          <div className="empty-state">
            <p className="empty-icon">🔍</p>
            <p className="empty-title">No users found</p>
            <p className="empty-sub">Try a different search term</p>
          </div>
        )}

        {!loading && !error && paginatedUsers.map((user, i) => (
          <div key={user.id} style={{ animationDelay: `${i * 0.05}s` }}>
            <UserCard user={user} />
          </div>
        ))}
      </section>

      <Pagination />
    </main>
  );
}
