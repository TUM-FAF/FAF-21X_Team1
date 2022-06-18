import './App.css';
import React, { useState } from 'react';
import QrScanner from './QrScanner';
import Quiz from './Quiz';

function App() {
  const [data, setData] = useState<string>('No result');
  const [shown , setShown] = useState(false);

  return (
    <div className="App bg-blue">
      <h1>
        QR Scanner
      </h1>
      <Quiz />
      <button onClick={()=>{setShown(prev => !prev)}}>Qr mode</button>
      {shown? <QrScanner /> : null}
    </div>
  );
}

export default App;
