import { useState } from "react";

function FormNew() {

    const [input, setInput] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const value = document.querySelector('.value');
        const element = <div>{input}</div>;
        value.appendChild(document.createTextNode(input));
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
        </form>
    )
}

export default FormNew;