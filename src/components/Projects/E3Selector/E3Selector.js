import React, {Component} from 'react';
import Button from "./Components/Components.js";
import "./App.sass";

class E3Selector extends Component {
    test = () => {
        alert("Tadaa");
    }

    render() {
        return (
            <div>
                <h1>E3Selector</h1>
                <Button text="hallo" action={this.test}/>
            </div>
        );
    }
}

export default E3Selector;
