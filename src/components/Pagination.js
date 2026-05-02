import React from 'react';
import { useUsers } from '../context/UserContext';
import './Pagination.css';

export default function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useUsers();

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        className="page-btn nav-btn"
        onClick={() => setCurrentPage(p => p - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>

      <div className="page-numbers">
        {pages.map(page => (
          <button
            key={page}
            className={`page-btn ${currentPage === page ? 'active' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="page-btn nav-btn"
        onClick={() => setCurrentPage(p => p + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
}
