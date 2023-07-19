import { useState } from "react";

function FormNew() {

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
    )
}

export default FormNew;