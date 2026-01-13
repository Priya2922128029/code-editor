// components/ControlBar.jsx
import React from 'react';
import './ControlBar.css';

const ControlBar = ({
  activeTab,
  setActiveTab,
  layout,
  setLayout,
  autoRun,
  setAutoRun,
  onRun,
  onReset,
  isRunning
}) => {
  return (
    <div className="control-bar">
      <div className="control-group">
        <div className="control-label">
          <span className="control-icon">⚙️</span>
          Layout
        </div>
        <div className="control-buttons">
          <button
            className={`layout-btn ${layout === 'split' ? 'active' : ''}`}
            onClick={() => setLayout('split')}
            title="Split View"
          >
            <span className="btn-icon">⎹</span>
            Split
          </button>
          <button
            className={`layout-btn ${layout === 'preview' ? 'active' : ''}`}
            onClick={() => setLayout('preview')}
            title="Preview Focus"
          >
            <span className="btn-icon">🔍</span>
            Preview
          </button>
          <button
            className={`layout-btn ${layout === 'full' ? 'active' : ''}`}
            onClick={() => setLayout('full')}
            title="Full Editor"
          >
            <span className="btn-icon">⛶</span>
            Full
          </button>
        </div>
      </div>

      <div className="control-group">
        <div className="control-label">
          <span className="control-icon">🚀</span>
          Actions
        </div>
        <div className="control-buttons">
          <button
            className={`action-btn run-btn ${isRunning ? 'running' : ''}`}
            onClick={onRun}
            disabled={isRunning}
          >
            <span className="btn-icon">
              {isRunning ? '⏳' : '▶️'}
            </span>
            {isRunning ? 'Running...' : 'Run Code'}
            <span className="hotkey">F9</span>
          </button>
          
          <button
            className="action-btn reset-btn"
            onClick={onReset}
          >
            <span className="btn-icon">🗑️</span>
            Reset All
          </button>
        </div>
      </div>

      <div className="control-group">
        <div className="control-label">
          <span className="control-icon">⚡</span>
          Settings
        </div>
        <div className="control-switches">
          <label className="switch">
            <input
              type="checkbox"
              checked={autoRun}
              onChange={(e) => setAutoRun(e.target.checked)}
            />
            <span className="slider"></span>
            <span className="switch-label">
              <span className="switch-icon">🔁</span>
              Auto-run
            </span>
          </label>
        </div>
      </div>

      <div className="control-group">
        <div className="control-label">
          <span className="control-icon">📊</span>
          Stats
        </div>
        <div className="control-stats">
          <div className="stat-item">
            <span className="stat-value">0</span>
            <span className="stat-label">Errors</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">Performance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlBar;