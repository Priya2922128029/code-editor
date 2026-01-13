// components/EditorPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import EditorPanel from './EditorPanel';
import PreviewPanel from './PreviewPanel';
import ControlBar from './ControlBar';
import TemplateDrawer from './TemplateDrawer';
import './EditorPage.css';

const EditorPage = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('html');
  const [layout, setLayout] = useState('split');
  const [autoRun, setAutoRun] = useState(true);
  const [showTemplates, setShowTemplates] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const previewRef = useRef(null);

  // Load saved code from localStorage
  useEffect(() => {
    const savedHtml = localStorage.getItem('editor-html') || '';
    const savedCss = localStorage.getItem('editor-css') || '';
    const savedJs = localStorage.getItem('editor-js') || '';
    const savedTheme = localStorage.getItem('editor-theme') || 'dark';

    setHtml(savedHtml);
    setCss(savedCss);
    setJs(savedJs);
    setTheme(savedTheme);
  }, []);

  // Update srcDoc when code changes
  useEffect(() => {
    if (autoRun) {
      const timeout = setTimeout(() => {
        updatePreview();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [html, css, js, autoRun]);

  // Update localStorage when code changes
  useEffect(() => {
    localStorage.setItem('editor-html', html);
    localStorage.setItem('editor-css', css);
    localStorage.setItem('editor-js', js);
    localStorage.setItem('editor-theme', theme);
  }, [html, css, js, theme]);

  const updatePreview = () => {
    setIsRunning(true);
    try {
      const doc = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            ${css}
            body {
              margin: 0;
              padding: 20px;
              min-height: 100vh;
              font-family: 'Segoe UI', system-ui, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .error-boundary {
              position: fixed;
              top: 10px;
              right: 10px;
              background: #ef4444;
              color: white;
              padding: 10px 20px;
              border-radius: 5px;
              z-index: 1000;
            }
          </style>
        </head>
        <body>
          ${html}
          <script>
            window.addEventListener('error', (e) => {
              window.parent.postMessage({
                type: 'ERROR',
                error: e.message
              }, '*');
            });
            
            try {
              ${js}
            } catch (error) {
              window.parent.postMessage({
                type: 'ERROR',
                error: error.message
              }, '*');
            }
          </script>
        </body>
        </html>
      `;
      setSrcDoc(doc);
      setErrors([]);
    } catch (error) {
      setErrors([{ message: error.message, type: 'compile' }]);
    } finally {
      setTimeout(() => setIsRunning(false), 300);
    }
  };

  const handleRunCode = () => {
    updatePreview();
  };

  const handleResetCode = () => {
    setHtml('');
    setCss('');
    setJs('');
    localStorage.removeItem('editor-html');
    localStorage.removeItem('editor-css');
    localStorage.removeItem('editor-js');
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLoadTemplate = (template) => {
    setHtml(template.html);
    setCss(template.css);
    setJs(template.js);
    setShowTemplates(false);
  };

  // Listen for errors from iframe
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'ERROR') {
        setErrors(prev => [...prev, {
          message: event.data.error,
          type: 'runtime',
          timestamp: new Date().toLocaleTimeString()
        }]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className={`editor-page ${theme}`}>
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Header */}
      <header className="editor-header">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-dot"></div>
              <div className="logo-bracket">{'</>'}</div>
            </div>
            <h1 className="logo-text">
              <span className="gradient-text">CodeFlow</span> Editor
            </h1>
          </div>
          <div className="version-badge">v1.0</div>
        </div>

        <div className="header-center">
          <div className="connection-status">
            <div className="status-dot connected"></div>
            <span>Frontend Only</span>
          </div>
        </div>

        <div className="header-right">
          <button 
            className="template-btn"
            onClick={() => setShowTemplates(!showTemplates)}
          >
            <span className="btn-icon">📋</span>
            Templates
          </button>
          <div className="theme-toggle" onClick={handleThemeToggle}>
            <div className={`toggle-slider ${theme === 'dark' ? 'dark' : 'light'}`}>
              <div className="toggle-thumb">
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Control Bar */}
      <ControlBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        layout={layout}
        setLayout={setLayout}
        autoRun={autoRun}
        setAutoRun={setAutoRun}
        onRun={handleRunCode}
        onReset={handleResetCode}
        isRunning={isRunning}
      />

      {/* Main Editor Area */}
      <main className={`editor-main ${layout}`}>
        <div className="editor-section">
          <div className="editor-tabs">
            {['html', 'css', 'js'].map((tab) => (
              <button
                key={tab}
                className={`editor-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="tab-icon">
                  {tab === 'html' ? '🌐' : tab === 'css' ? '🎨' : '⚡'}
                </span>
                {tab.toUpperCase()}
                {activeTab === tab && <div className="tab-indicator"></div>}
              </button>
            ))}
          </div>

          <div className="editor-container">
            <EditorPanel
              language={activeTab}
              value={activeTab === 'html' ? html : activeTab === 'css' ? css : js}
              onChange={activeTab === 'html' ? setHtml : activeTab === 'css' ? setCss : setJs}
              theme={theme}
            />
          </div>
        </div>

        <div className="preview-section">
          <PreviewPanel
            srcDoc={srcDoc}
            theme={theme}
            ref={previewRef}
            isRunning={isRunning}
          />
        </div>
      </main>

      {/* Error Panel */}
      {errors.length > 0 && (
        <div className="error-panel">
          <div className="error-header">
            <span className="error-icon">⚠️</span>
            <h3>Errors ({errors.length})</h3>
            <button onClick={() => setErrors([])}>Clear</button>
          </div>
          <div className="error-list">
            {errors.map((error, index) => (
              <div key={index} className="error-item">
                <span className="error-type">{error.type}</span>
                <span className="error-message">{error.message}</span>
                <span className="error-time">{error.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Templates Drawer */}
      <TemplateDrawer
        isOpen={showTemplates}
        onClose={() => setShowTemplates(false)}
        onSelect={handleLoadTemplate}
      />

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element el1"></div>
        <div className="floating-element el2"></div>
        <div className="floating-element el3"></div>
      </div>
    </div>
  );
};

export default EditorPage;