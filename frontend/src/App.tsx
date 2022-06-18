import './App.css';
import React, { useState } from 'react';
import QrScanner from './QrScanner';

function App() {
  const [data, setData] = useState<string>('No result');
  const [shown , setShown] = useState(false);

  return (
    <div className="App bg-blue">
      <h1>
        Hello world!
      </h1>
      <button onClick={()=>{setShown(prev => !prev)}}>Qr mode</button>
      {shown? <QrScanner /> : null}
    </div>
  );
}

export default App;
