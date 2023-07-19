import { useState } from "react";

function FormNew() {

    const [input, setInput] = useState("");
    // console.log('input: '+ input);

    const onSubmit = async (event) => {
        event.preventDefault();
        // add here 
    };

    const onChange = (event) => {
        console.log('input: '+ input);
        console.log(event.target)
        const value = event.target.value;
        setInput(value);
    };
    
    return (
        <form onSubmit={onSubmit}>
            TO DO LIST
            <label>
                <div>Enter your task:</div>
                <input type="text" onChange={onChange} value={input} />
            </label>
            <div>
                <button type="submit">Submit</button>
                <div className="">{input}</div>
            </div>
        </form>
    )
}

export default FormNew;