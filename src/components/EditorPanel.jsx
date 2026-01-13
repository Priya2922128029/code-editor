// components/EditorPanel.jsx
import React, { useEffect, useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import './EditorPanel.css';

const EditorPanel = ({ language, value, onChange, theme }) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleEditorChange = (value) => {
    onChange(value || '');
  };

  const editorTheme = theme === 'dark' ? 'vs-dark' : 'light';

  return (
    <div className={`editor-panel ${theme}`}>
      <div className="editor-header-bar">
        <div className="editor-info">
          <span className="language-badge">{language.toUpperCase()}</span>
          <span className="char-count">{value.length} characters</span>
          <span className="line-count">
            {value.split('\n').length} lines
          </span>
        </div>
        <div className="editor-actions">
          <button 
            className="action-btn"
            onClick={() => editorRef.current?.trigger('keyboard', 'editor.action.formatDocument')}
            title="Format Code"
          >
            <span className="action-icon">✨</span>
            Format
          </button>
        </div>
      </div>
      
      <div className="monaco-container">
        <Editor
          height="100%"
          language={language}
          value={value}
          theme={editorTheme}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: true },
            fontSize: 14,
            wordWrap: 'on',
            smoothScrolling: true,
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: true,
            renderLineHighlight: 'all',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            formatOnPaste: true,
            formatOnType: true,
            fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
            fontLigatures: true,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              useShadows: false
            }
          }}
        />
      </div>

      <div className="editor-footer">
        <div className="editor-hints">
          <div className="hint">
            <span className="hint-key">Ctrl + S</span>
            <span className="hint-text">Auto-saves to browser</span>
          </div>
          <div className="hint">
            <span className="hint-key">Tab</span>
            <span className="hint-text">Indent code</span>
          </div>
          <div className="hint">
            <span className="hint-key">Ctrl + Space</span>
            <span className="hint-text">Auto-complete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;