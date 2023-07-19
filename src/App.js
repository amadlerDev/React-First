import logo from './logo.svg';
import xIcon from './x-icon.svg';
import './App.css';

import { useState } from "react";

function App() {

    const [input, setInput] = useState("");

    const onSubmit = async (event) => {

        // disable render when submit
        event.preventDefault();

        // create task div
        const parent = document.querySelector('.value');
        const elem = document.createElement("div");

        // add delete icon
        const deleteIcon = document.createElement("img");
        deleteIcon.setAttribute('src', xIcon)
        deleteIcon.setAttribute('class', 'x-icon');

        // handle remove task
        deleteIcon.addEventListener(('click'), function() {
            elem.remove();
            deleteIcon.remove();
        });

        // append task
        elem.innerHTML = input + "\n"; // add delete icon
        parent.appendChild(elem);
        parent.appendChild(deleteIcon);
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
            </form>
        </header>
      </div>
    )
}

export default App;
