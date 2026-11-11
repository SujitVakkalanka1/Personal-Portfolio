import React from 'react';

export default function Toast({ toasts }) {
  return (
    <div className="toast-container" id="toast-container">
      {toasts.map(t => (
        <div key={t.id} className="toast-item show">
          <span>⚡</span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}

