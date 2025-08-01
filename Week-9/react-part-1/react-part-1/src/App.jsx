import React, { useState, useEffect } from 'react';

// Grandma's Component
function GrandmaComponent() {
  useEffect(() => {
    console.log("👵 Hello! Grandma's page is now showing.");

    return () => {
      console.log("👋 Bye-bye! Grandma's page is going away.");
    };
  }, []);

  return (
    <div style={{ padding: '20px', border: '2px dashed pink' }}>
      <h2>Grandma's Lovely Corner 💖</h2>
    </div>
  );
}

// Main App
function App() {
  const [showGrandma, setShowGrandma] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={() => setShowGrandma(!showGrandma)}
       
      >
        {showGrandma ? 'Hide Grandma 👵' : 'Show Grandma 👀'}
      </button>

      <div style={{ marginTop: '30px' }}>
        {showGrandma && <GrandmaComponent />}
      </div>
    </div>
  );
}

export default App;
