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
    const [selectedList, setselectedList] = useState([])
    const classes = useStyles()
    const handleSel = (title) => {
        
        let e = selectedList.find(c => c.Title === title)
        
        if(e !== undefined){
            
            setselectedList(selectedList.filter(c => c !== e))
        }else{
            
            setselectedList(selectedList.concat(list.find(c => c.Title === title)))
            
        }

    } 
   
    return( 
            
                <Container>
                    <Grid container>
                        <Grid item xs={6} className={classes.selected} >
                            <Paper className={classes.paper}>
                                <List >
                                    {
                                        selectedList.map( c => 
                                            (<SelectedCourse key ={c.Link} Title={c.Title} handleSel={handleSel} classes={classes}/>)
                                            //(<ListItem>{c.Title}</ListItem>)
                                        )
                                    }
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>

                            </Paper>
                        </Grid>
                        <Grid item>
                        <TableContainer>
                            <Table stickyHeader className={classes.table}>
                                <colgroup>
                                        <col style={{width:'10%'}}/>
                                        <col style={{width:'10%'}}/>
                                        <col style={{width:'10%'}}/>
                                        <col style={{width:'70%'}}/>
                                        <col style={{width:'20%'}}/>
                                        <col style={{width:'10%'}}/>
                                        <col style={{width:'10%'}}/>
                                </colgroup>
                                <TableHead >
                                    <TableRow >
                                        <TableCell/>
                                        <TableCell align="center">
                                            <TableSortLabel >credits
                                                </TableSortLabel></TableCell>
                                        <TableCell align="center">Time commitment</TableCell>
                                        <TableCell align="left">Title</TableCell>
                                        <TableCell align="center">Location</TableCell>
                                        <TableCell align="center">Language</TableCell>
                                        <TableCell/>
                                    </TableRow>
                                </TableHead>
                                
                                <TableBody>
                                    {
                                        
                                        //Only display the courses that are not contained within the selectedList
                                        list.filter(c => !selectedList.includes(c)).map( entry => {
                                            
                                            return(<Course key={entry.Link} {...entry} handleSel={handleSel} classes={classes}/>)
                                            
                                        })
                                    }
                                </TableBody>
                            </Table>

                        </TableContainer>
                        </Grid>
                        </Grid>
                        </Container> 
            
    )

}
const SelectedCourse = (props) =>{
    const {
        Title,
        handleSel
    } = props
    const classes = props.classes

    return (
        <>
            <ListItem>
                <ListItemIcon color="action">                    
                    <IconButton  onClick ={() => handleSel(Title)}><DeleteIcon /></IconButton>
                </ListItemIcon>
                {Title}
            </ListItem>
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
        handleSel
        } = props
    const [isOpen, toggle] = useState(false)
   
    const classes = props.classes
        
        return (
        <React.Fragment>
           
            <TableRow className={classes.row}>
                    <TableCell>
                        <IconButton  onClick={() => handleSel(Title)}>
                            <AddIcon color="action"  />
                        </IconButton> </TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)}> {Credits} Cr.</TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)} >{timeCom != 0? timeCom + " hr" : "-"}</TableCell>
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
                            
                                <Grid item xs >
                                    <Paper >
                                        <Typography >

                                        Rating TODO

                                    </Typography></Paper>

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
                                            <ListItemText></ListItemText>
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
