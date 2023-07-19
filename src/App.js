import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {

    const [input, setInput] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const parent = document.querySelector('.value');
        const elem = document.createElement("div");
        elem.innerHTML = input + "\n"; // add delete icon
        parent.appendChild(elem);
    };

    const onChange = (event) => {
        const value = event.target.value;
        setInput(value);
    };
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={onSubmit}>
            <div className="">TO DO LIST</div>
            <label>
                <div>Enter your task:</div>
                <input type="text" onChange={onChange} value={input} />
            </label>
            <button type="submit">Submit</button>
            <div className="value"></div>
            {/* {elements.map((item) => <p>{item}</p>)} */}
            
        </form>
        </header>
      </div>
        
    )
}

export default App;
