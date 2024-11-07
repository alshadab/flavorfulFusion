// src/components/GlobalLoading.js
import React from 'react';
import './GlobalLoading.css';

function GlobalLoading() {
  return (
    <div className="global-loading">
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
}

export default GlobalLoading;
