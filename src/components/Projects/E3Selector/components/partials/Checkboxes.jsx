import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const CheckBox = (props) => {
	const actionIterator = (action, params) => {
		params.forEach(p => {
			action(p[0], p[1]);
		});
	};

	const [isActive, toggle] = useState(props.checked)

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
