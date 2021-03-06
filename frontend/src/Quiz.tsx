import { useState } from 'react';

interface Props {
  question?: string
};

const Quiz = ({question}: Props) => {
  const [name, setName] = useState('');

  return (
    <div>
        <h2>How many people are here?</h2>
        <form>
      <label>Enter your answer:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={(e) =>alert(name)}>Submit</button>
    </form>
    </div>
  );
}
export default Quiz;