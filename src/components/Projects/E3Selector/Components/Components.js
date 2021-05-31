import React, {Component} from 'react';
import "./Components.sass";

const Button = (props) => (
	<button onClick={() => props.action()}>{props.text}</button>
);

export default Button;
