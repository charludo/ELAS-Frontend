import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Icon, List, ListItemText, TableBody, TableContainer, TableHead, TableRow, Typography} from '@material-ui/core'
import { TableCell, Table, Container} from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from "@material-ui/core/Box";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Schedule from './Components/Course_Schedule.jsx'
import Link from '@material-ui/core/Link';
import "./App.sass";
import German from "./res/German.png";
import English from "./res/English.png";
import Turkish from "./res/Turkish.png";
import Dutch from "./res/Dutch.png";


const useStyles = makeStyles((theme)=>({
        selected: {
            maxWidth: '50%',
            maxHeight: '30%'
        },
        table: {
            maxWidth: '95%',
            maxHeight: '1200'
        },
        row: {
            '& > *': {
              borderBottom: 'unset',
            }},
        paper : {

            margin: `${theme.spacing(1)}px auto`,
            textAlign: 'center',
            height: 270,
            width: 500,
            },
        textcell:{
            whiteSpace: 'nowarp',
            overflow: 'hidden'
        },
        sorter: {
            color: "#0057A7",
            textDecoration: "underline",
            cursor: "pointer"
        }

        })
)
const ExamType = (e) => {
    switch(e){
        case "Präsentation": return "Presentation"
        case "Schriftliche Ausarbeitung" : return "Essay"
        case "Mündliche Prüfung":  return "Oral"
        case "Klausur": return "Exam"
        default: return e
    }

}
const fType = (e) => {
    switch(e){
        case  "Vorlesung" : return "Lecture"
        case "Blockseminar": return "Block Seminar"
        case "VL/Übung" : return "Lecture/Exercise"
        default: return e
    }
}

const langFlag = (language) =>{
    switch(language){
        case 'Türkisch':
            return Turkish
        case 'Deutsch':
            return German
        case 'Englisch':
            return English
        case 'Niederländisch':
            return Dutch

        default:
            return ''

    }
}


const Courses = (props) => {
    //const [list, setList] = useState(props.list)
    const list = props.list
    const handleSel = props.handleSel
    const selectedList = props.selectedList
    const classes = useStyles()
    const sort = props.sort
    const booked = props.booked

    const headCells = [
        {id:'credits', numeric: true, align: "center"},
        {id:'Time Commitment', numeric: true, align: "center"},
        {id:'Title', numeric: false, align: "left"},
        {id:'Location', numeric: false, align: "center"},
        {id:'Language', numeric: false, align: "center"},
    ]
    return(
            <Grid container spacing={1} direction="row" alignItems="stretch" justify="center">
                <Grid item xs={12}>
                    <Paper elevation={6} style={{padding: 24}}>
                        <Grid container spacing={3} direction="row" alignItems="center" justify="space-evenly">
                            <Grid item xs={1} className={classes.sorter} onClick={() => sort("Credits")}>Credits</Grid>
                            <Grid item xs={1} className={classes.sorter} onClick={() => sort("SWS")}>Workload</Grid>
                            <Grid item xs={6} className={classes.sorter} onClick={() => sort("Title")}>Title</Grid>
                            <Grid item xs={2} className={classes.sorter} onClick={() => sort("Location")}>Location</Grid>
                            <Grid item xs={1} className={classes.sorter} onClick={() => sort("Language")}>Language</Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {
                    //Only display the courses that are not contained within the selectedList
                    list.filter(c => !selectedList.map(s => s.Title).includes(c.Title)).map( entry => {
                        return(
                            <Grid item xs={12}>
                                <Course component={Paper} key={entry.Link} {...entry} handleSel={handleSel} booked={booked} classes={classes}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
    )

}
const SelectedCourses = (props) => {
    if(!props.selectedList.length){

        return("click + to add courses")
    }else{
    return(
        props.selectedList.map( c =>
            (<SelectedCourse key ={c.Link} {...c} booked={props.booked} overBooked={props.overBooked} handleSel={props.handleSel}/>))
    )
}}
const SelectedCourse = (props) =>{
    const {
        Credits,
        Title,
        SWS: timeCom,
        Location,
        Type,
        Language,
        Times_manual :schedule,
        Exam,
        handleSel,
        Link:link,
        booked,
        overBooked
        } = props

    const [isOpen, toggle] = useState(false)
    return (
        <>
            <ListItem primary={Title}>
                <ListItemIcon color="action">
                    <IconButton   onClick ={() => handleSel(Title)}><DeleteIcon /></IconButton>
                </ListItemIcon>
                <div onClick={() => toggle(!isOpen)}>
                    {Title}
                </div>
                <Icon aria-label="expand row" size='inherit'  onClick={() => toggle(!isOpen)} >
                    {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </Icon>

            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box margin={1}>
                            <Grid container wrap='nowrap' spacing ={3}>

                                <Grid item>
                                    <Schedule schedule={schedule} booked={booked} overBooked={overBooked}/>
                                </Grid>


                                <Grid item >

                                    <List>
                                        {
                                        //<Schedule day={}> TODO
                                        schedule.split(";").map(e =>
                                            (<ListItemText>{e}</ListItemText>))
                                            }
                                    </List>

                                </Grid>
                                <Grid item xs>
                                    <Typography >
                                        <List>
                                            <ListItemText align="left">Location: {Location.split(";").join("/")}</ListItemText>
                                            <ListItemText align="left">Language: {Language}</ListItemText>
                                            <ListItemText align="left">Course Type: {Type.split(";").map(e => fType(e)).join()}</ListItemText>
                                            <ListItemText align="left">Credits: {Credits}</ListItemText>
                                            <ListItemText align="left">Exam type: {Exam.split(";").map(e => ExamType(e)).join()}</ListItemText>
                                            <ListItem>
                                                <Link href={link} >
                                                    visit the course page
                                                    </Link>
                                            </ListItem>
                                        </List>
                                    </Typography>
                                </Grid>
                            </Grid>
                            </Box>
            </Collapse>
        </>
    )
}

const Course = (props) => {

    //console.log(props)
    const {Credits,
        Title,
        SWS: timeCom,
        Location,
        Type,
        Language,
        Times_manual :schedule,
        Exam,
        Link:link,
        handleSel,
        booked
        } = props
    const [isOpen, toggle] = useState(false)

    const classes = props.classes
        return (

            <Paper elevation={3} style={{padding: "3px 24px", position: "relative"}}>
                <div class="select-icon"><IconButton  onClick={() => handleSel(Title)}><AddIcon color="action"/></IconButton></div>
                <Grid item xs={12}>
                    <Grid container spacing={3} direction="row" alignItems="center" justify="space-evenly">
                        <Grid item xs={1} onClick={() => toggle(!isOpen)}>{Credits + " Cr."}</Grid>
                        <Grid item xs={1} onClick={() => toggle(!isOpen)}>{timeCom != 0? timeCom + " hrs." : "-"}</Grid>
                        <Grid item xs={6} onClick={() => toggle(!isOpen)}>{Title}</Grid>
                        <Grid item xs={2} onClick={() => toggle(!isOpen)}>{(Location.split(";").length > 1) ? "various" : Location}</Grid>
                        <Grid item xs={1} onClick={() => toggle(!isOpen)}><img src={langFlag(Language)}/></Grid>
                        <Grid item xs={1}><div class="expand-icon"><Icon aria-label="expand row" onClick={() => toggle(!isOpen)}>{isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</Icon></div></Grid>
                    </Grid>
                </Grid>

                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Grid item xs={12} style={{padding: 24}}>
                        <Grid container spacing={3} direction="row" alignItems="center" justify="space-evenly">
                            <Grid item xs={3}>&nbsp;</Grid>
                            <Grid item xs={3}><Schedule schedule={schedule} booked={booked}/></Grid>
                            <Grid item xs={3}>
                                <div class="info-table">
                                    <table>
                                        <tr><th>Location:</th><td>{Location.split(";").join(", ")}</td></tr>
                                        <tr><th>Language:</th><td>{Language}</td></tr><br></br>
                                        <tr><th>Course Type:</th><td>{Type.split(";").map(e => fType(e)).join(", ")}</td></tr><br></br>
                                        <tr><th>Credits:</th><td>{Credits}</td></tr>
                                        <tr><th>Exam Type:</th><td>{Exam.split(";").map(e => ExamType(e)).join(", ")}</td></tr>
                                    </table><br></br>
                                    <a href={link} target="_blank">visit the course page</a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Collapse>
            </Paper>
    )}

    export default Courses;
    export {SelectedCourses};
