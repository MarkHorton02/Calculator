import {useState} from 'react';
import './App.css';
import {evaluate} from "mathjs";

const App = () => {
  const [input, setInput] = useState("");

  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '0', '.', '=', '/',
    'C'
  ];

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(evaluate(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {buttons.map((button) => (
          <button key={button} onClick={() => handleClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;