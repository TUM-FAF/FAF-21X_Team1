import { Route, Switch  } from "react-router-dom";
import { Map } from './Map';
import QrScanner from './QrScanner';
import Quiz from './Quiz';
import './App.css';
import { ChangeEvent, useState, useEffect  } from "react";

interface UserFormProps {
  name: string;
  setName: (newValue: string) => void;
} 

function UserForm({name, setName}: UserFormProps): JSX.Element | null {
  const [hide, setHide] = useState(false);

  if (hide) return null

  return (
    <div>
        <h2>What is your name ?</h2>
      <form>
      <label>Enter your answer:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={(e) => setHide(true)}>Submit</button>
    </form>
    </div>
  )
}

function App() {
  const [data, setData] = useState<string>('No result');
  const [shown , setShown] = useState(false);
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('')
  
  useEffect(() => {
    if (!name || !data) return

    const url = makeURL(+data, name);

    fetch(url, {'method': 'POST'}).then((res) => res.json()).then(res => {
      setQuestion(res['question'])
      setShown(false)
    })
  }, [data])

  const handleSetName = (newValue: string) => {
    handleSetName(newValue);
  }

  function makeURL(qr_id: number, name: string) {
    return 'https://connectfaf.herokuapp.com/qr/' + qr_id + '/' + name;
  }

  return (
    <Switch>
      <Route path='/qrcode'>
      <div className="App bg-blue">
      <UserForm name={name} setName={setName} />
      <h1>
        QR Scanner
      </h1>
      {question && <Quiz question={question} />}
      <button onClick={()=>{setShown(prev => !prev)}}>Qr mode</button>
      {shown? <QrScanner data={data} setData={setData} /> : null}
    </div>
      </Route>
      <Route path='/'>
        <Map />
      </Route>
    </Switch>
  );
}

export default App;
