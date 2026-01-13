// components/PreviewPanel.jsx
import React, { forwardRef } from 'react';
import './PreviewPanel.css';

const PreviewPanel = forwardRef(({ srcDoc, theme, isRunning }, ref) => {
  return (
    <div className={`preview-panel ${theme}`}>
      <div className="preview-header">
        <div className="preview-title">
          <span className="preview-icon">👁️</span>
          Live Preview
          {isRunning && (
            <span className="running-badge">
              <span className="running-dot"></span>
              Running...
            </span>
          )}
        </div>
        <div className="preview-controls">
          <button className="control-btn" title="Refresh">
            <span>🔄</span>
          </button>
          <button className="control-btn" title="Fullscreen">
            <span>🔍</span>
          </button>
        </div>
      </div>
      
      <div className="preview-container">
        {srcDoc ? (
          <iframe
            ref={ref}
            srcDoc={srcDoc}
            title="preview"
            sandbox="allow-scripts allow-same-origin allow-modals allow-forms"
            className="preview-iframe"
            style={{ opacity: isRunning ? 0.8 : 1 }}
          />
        ) : (
          <div className="preview-placeholder">
            <div className="placeholder-content">
              <div className="placeholder-icon">🚀</div>
              <h3>Your Preview Will Appear Here</h3>
              <p>Write some code and click "Run Code" to see the magic!</p>
              <div className="placeholder-hints">
                <div className="hint-item">
                  <span className="hint-number">1</span>
                  <span>Write HTML, CSS, and JavaScript</span>
                </div>
                <div className="hint-item">
                  <span className="hint-number">2</span>
                  <span>Click "Run Code" or enable Auto-run</span>
                </div>
                <div className="hint-item">
                  <span className="hint-number">3</span>
                  <span>See instant results here!</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="preview-footer">
        <div className="preview-stats">
          <div className="stat">
            <span className="stat-label">Status:</span>
            <span className="stat-value ready">Ready</span>
          </div>
          <div className="stat">
            <span className="stat-label">Sandbox:</span>
            <span className="stat-value active">Active</span>
          </div>
        </div>
        <div className="preview-tip">
          💡 Tip: All code runs securely in your browser sandbox
        </div>
      </div>
    </div>
  );
});

PreviewPanel.displayName = 'PreviewPanel';

export default PreviewPanel;