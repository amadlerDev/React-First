import React from "react"; 
import Task from './Task';
//import 'Form.css'


export default class Form extends React.Component {
    constructor(props) {
        super(props)
        // this.childrens = [];
        this._onButtonClick = this._onButtonClick.bind(this);
        this.reset()
        
    }

    _onButtonClick() {
        this.setState({
          showComponent: true,
        });
    }

    reset() {
        this.state = {
            inputValue: ''
        };
    }    

    updateInputValue(event) {
        const val = event.target.value;
        // console.log(val)
        this.setState({
            showComponent: false,
            inputValue: val
        });
    }

    handleSubmit(e) {
        // e.preventDefault();
        // console.log(e.target[0].value)
        // e.target[0].value = ''
    }


    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                TO DO LIST
                <label>Enter your task:
                    <input value={this.state.inputValue} onChange={event => this.updateInputValue(event)}/>
                </label>
                <div>
                <button type="submit">Submit</button>
                
                {this.state.showComponent ?
                    <Task /> :
                    null
                }
                </div>
                {/* <div>
                    {event => this.updateInputValue((event) => {
                    return (
                        <div className="box">
                            <div></div>
                        </div>
                    )
                    })}
                </div> */}
            </form>
        );
    }
}

