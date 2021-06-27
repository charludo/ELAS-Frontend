import { Paper } from "@material-ui/core"
import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
    true:{
        width: '30px',
		height: '30px',
		margin: '1px',
		'background-color': '#F2994A'
    },
    false:{

        width: '30px',
		height: '30px',
		margin: '1px',
        'background-color': '#E0E0E0'
    }
}))
const Schedule = (props) => {
    const classes = useStyles()
    const {schedule} = props
    const list = props.schedule.split(";")
    

    
    const times = ['8-10','10-12','12-14','14-16','16-18','18-20']
    const days = ['Mo','Di','Mi', 'Do', 'Fr', 'Sa', 'So']
	return (

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
                {//t for time,  c for the day
                
                times.map( t => {
                    return(
                    <tr>
                        <th>{t}</th>
                        {
                            days.map( d => {
                                return(<td>{list.includes(d +t) ?(
                                    <Paper className ={classes.true}/>):
                                    (<Paper className ={classes.false}/>)
                                    }</td>)
                            })
                        }
                    </tr>)
                })}
				
			</table>
		
	);
}
export default Schedule;