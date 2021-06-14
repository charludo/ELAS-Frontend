import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import "./Components.sass";

const CheckBox = (props) => (
	<button onClick={() => props.action()}>{props.text}</button>
);

export { CheckBox };

const TimeTable = (props) => (
	<Checkbox label="Test" defaultChecked={true} color="primary"/>
);

export default TimeTable;
