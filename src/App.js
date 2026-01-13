// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import EditorPage from './components/EditorPage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? <LoadingScreen /> : <EditorPage />}
    </div>
  );
}

export default App;