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
        course :{
            margin: '1px',
            height: '65',
            width: '1242'
        },
        textcell:{
            whiteSpace: 'nowarp',
            overflow: 'hidden'
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
            return 'TurkeyFlag'
        case 'Deutsch':
            return 'GermanFlag'
        case 'Englisch':
            return 'EnglishFlag'
        case 'Niederländisch':
            return 'DutchFlag'

        default:
            return 'undefined'

    }
}


const Courses = (props) => {
    //const [list, setList] = useState(props.list)
    const list = props.list
    const handleSel = props.handleSel
    const selectedList = props.selectedList
    const classes = useStyles()
    const sort = props.sort

    const headCells = [
        {id:'credits', numeric: true, align: "center"},
        {id:'Time Commitment', numeric: true, align: "center"},
        {id:'Title', numeric: false, align: "left"},
        {id:'Location', numeric: false, align: "center"},
        {id:'Language', numeric: false, align: "center"},
    ]
    return(

                        <TableContainer>
                            <Table stickyHeader className={classes.table}>

                                <TableHead component={Paper} >
                                    <TableRow >
                                        <TableCell/>
                                        <TableCell align="center">
                                            <TableSortLabel onClick={() => sort("Credits")} hideSortIcon>credits
                                                </TableSortLabel>
                                                </TableCell>
                                        <TableCell align="center">
                                            <TableSortLabel onClick={() => sort("SWS")} hideSortIcon>Time Commitment
                                                    </TableSortLabel>
                                            </TableCell>
                                        <TableCell align="left">
                                            <TableSortLabel onClick={() => sort("Title")} hideSortIcon>Title
                                                    </TableSortLabel></TableCell>
                                        <TableCell align="center">
                                            <TableSortLabel onClick={() => sort("Location")} hideSortIcon>Location
                                                    </TableSortLabel></TableCell>
                                        <TableCell align="center">
                                            <TableSortLabel onClick={() => sort("Language")} hideSortIcon>Language</TableSortLabel>
                                                    </TableCell>
                                        <TableCell/>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {
                                        //Only display the courses that are not contained within the selectedList
                                        list.filter(c => !selectedList.map(s => s.Title).includes(c.Title)).map( entry => {

                                            return(<Course component={Paper} key={entry.Link} {...entry} handleSel={handleSel} classes={classes}/>)

                                        })
                                    }
                                </TableBody>
                            </Table>

                        </TableContainer>



    )

}
const SelectedCourses = (props) => {
    if(!props.selectedList.length){

        return("Click + to add Courses")
    }else{
    return(
        props.selectedList.map( c =>
            (<SelectedCourse key ={c.Link} {...c} handleSel={props.handleSel}/>))
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
        Link:link
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
                                    <Schedule schedule={schedule}/>
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
        handleSel
        } = props
    const [isOpen, toggle] = useState(false)

    const classes = props.classes
        return (
        <React.Fragment component={Paper} className={classes.course}>

            <TableRow >
                    <TableCell>
                        <IconButton  onClick={() => handleSel(Title)}>
                            <AddIcon color="action"  />
                        </IconButton> </TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)}> {Credits + " Cr."}</TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)} >{timeCom != 0? timeCom + " hrs." : "-"}</TableCell>
                    <TableCell align="left"  onClick={() => toggle(!isOpen)}>{Title}</TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)} >{Location.split(";").join()}</TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)} >{langFlag(Language)} </TableCell>
                    <TableCell>{
                    <Icon aria-label="expand row" size='inherit'  onClick={() => toggle(!isOpen)} >
                    {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </Icon>
                    }</TableCell>
            </TableRow>


            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 2 }} colSpan={7} >
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Grid container wrap='nowrap' spacing ={3}>

                                <Grid item>
                                    <Schedule schedule={schedule}/>
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
                </TableCell>
            </TableRow>
        </React.Fragment>
    )}

    export default Courses;
    export {SelectedCourses};
