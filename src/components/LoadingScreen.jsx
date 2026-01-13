// components/LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="code-editor-loader">
          <div className="loader-header">
            <div className="loader-dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
          </div>
          <div className="loader-content">
            <div className="code-line animated"></div>
            <div className="code-line animated delay-1"></div>
            <div className="code-line animated delay-2"></div>
            <div className="code-line animated delay-3"></div>
          </div>
        </div>
        <div className="loading-text">
          <h1 className="typing-animation">
            <span className="gradient-text">CodeFlow</span> Editor
          </h1>
          <p>Loading your creative space...</p>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;