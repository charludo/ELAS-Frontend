import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {Grid} from '@material-ui/core';
import "./Components.sass";

const CheckBox = (props) => {
	const actionIterator = (action, params) => {
		params.forEach(p => {
			action(p[0], p[1]);
		});
	};

	return (
		<Checkbox defaultChecked={props.checked} color={props.color} classes={props.classes} onClick={() => {actionIterator(props.action, props.arguments)}}/>
	);
}

CheckBox.defaultProps = {
	action: null,
	arguments: [],
	checked: true,
	color: "primary",
	classes: ""
}

export { CheckBox };

const TimeTable = (props) => (
	<div>
		<CheckBox classes="abc" action={alert} arguments={["a", "b"]}/>
		<h1>Divider</h1>
	</div>
);

export default TimeTable;
