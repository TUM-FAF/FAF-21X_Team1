import { Route, Switch  } from "react-router-dom";
import { Map } from './Map';
import QrScanner from './QrScanner';
import Quiz from './Quiz';
import './App.css';
import { useState } from "react";

function App() {
  const [data, setData] = useState<string>('No result');
  const [shown , setShown] = useState(false);

  return (
    <Switch>
      <Route path='/qrcode'>
      <div className="App bg-blue">
      <h1>
        QR Scanner
      </h1>
      <Quiz />
      <button onClick={()=>{setShown(prev => !prev)}}>Qr mode</button>
      {shown? <QrScanner /> : null}
    </div>
      </Route>
      <Route path='/'>
        <Map />
      </Route>
    </Switch>
  );
}

export default App;
