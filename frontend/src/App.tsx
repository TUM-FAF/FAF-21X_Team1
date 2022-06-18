import './App.css';
import { useState } from 'react';
import QrScanner from './QrScanner';

function App() {
  const [data, setData] = useState('No result');
  return (
    <div className="App bg-blue">
      <h1>
        Hello world!
      </h1>
      <QrScanner />
    </div>
  );
}

export default App;
