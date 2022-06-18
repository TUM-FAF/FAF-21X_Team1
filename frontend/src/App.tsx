import { Route, Switch  } from "react-router-dom";
import { Map } from './Map';

function App() {

  return (
    <Switch>
      <Route path='/qrcode'>
        <div>qr code page here</div>
      </Route>
      <Route path='/'>
        <Map />
      </Route>
    </Switch>
  );
}

export default App;
