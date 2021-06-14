import React, {Component,  useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import {Grid} from '@material-ui/core';
import "./Components.sass";

const CheckBox = (props) => {
	const actionIterator = (action, params) => {
		params.forEach(p => {
			action(p[0], p[1]);
		});
	};

	const [isActive, toggle] = useState(true)

	if (props.timeTable) {
		return (<div class={props.cssClasses + " checked-" + isActive} onClick={() => {toggle(!isActive); actionIterator(props.action, props.arguments)}}>&nbsp;</div>);
	} else if (props.label.length >= 1) {
		return (
			<FormControlLabel
	            control={
					<Checkbox defaultChecked={props.checked} color={props.color} classes={props.classes} onClick={() => {actionIterator(props.action, props.arguments)}}/>
				}
	            label={props.label}
	            labelPlacement={props.labelPosition}
				classes={props.labelClasses}
	        />
		);
	} else {
		return (
			<Checkbox defaultChecked={props.checked} color={props.color} classes={props.classes} onClick={() => {actionIterator(props.action, props.arguments)}}/>
		);
	}
}

CheckBox.defaultProps = {
	action: null,
	arguments: [],
	checked: true,
	color: "primary",
	classes: {},
	timeTable: false,
	cssClasses: "timeTableCheckbox",
	label: "",
	labelPosition: "end",
	labelClasses: {}
}


const TimeTable = (props) => {
	return (
		<Grid item>
			<table class="time-table">
				<tr>
					<th></th>
					<td>Mon</td>
					<td>Tue</td>
					<td>Wed</td>
					<td>Thu</td>
					<td>Fri</td>
					<td>Sat</td>
					<td>Sun</td>
				</tr>
				<tr>
					<th>8 - 10</th>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mo8-10"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Di8-10"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mi8-10"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Do8-10"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Fr8-10"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Sa8-10"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "So8-10"]]}/></td>
				</tr>
				<tr>
					<th>10 - 12</th>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mo10-12"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Di10-12"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mi10-12"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Do10-12"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Fr10-12"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Sa10-12"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "So10-12"]]}/></td>
				</tr>
				<tr>
					<th>12 - 14</th>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mo12-14"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Di12-14"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mi12-14"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Do12-14"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Fr12-14"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Sa12-14"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "So12-14"]]}/></td>
				</tr>
				<tr>
					<th>14 - 16</th>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mo14-16"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Di14-16"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mi14-16"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Do14-16"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Fr14-16"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Sa14-16"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "So14-16"]]}/></td>
				</tr>
				<tr>
					<th>16 - 18</th>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mo16-18"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Di16-18"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mi16-18"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Do16-18"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Fr16-18"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Sa16-18"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "So16-18"]]}/></td>
				</tr>
				<tr>
					<th>18 - 20</th>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mo18-20"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Di18-20"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Mi18-20"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Do18-20"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Fr18-20"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "Sa18-20"]]}/></td>
					<td><CheckBox timeTable={true} action={props.action} arguments={[["time", "So18-20"]]}/></td>
				</tr>
			</table>
		</Grid>
	);
}

const FilterGroup = (props) => {
	const filterArray = props.filters.map(f => (
		<Grid item>
			<CheckBox label={f.label} labelClasses={{label: f.classes}} action={props.action} arguments={f.arguments}/>
		</Grid>
	));
	return (
		<Grid item>
			<Grid container	direction="column" justify="space-evenly" alignItems="flex-start">
				<FormLabel component="legend">{props.groupLabel}</FormLabel>
				{ filterArray }
			</Grid>
		</Grid>
	);
}

FilterGroup.defaultProps = {
	classes: {}
}

export default CheckBox;
export { TimeTable };
export { FilterGroup };
