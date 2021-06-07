import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Icon, List, ListItemText, TableBody, TableContainer, TableHead, TableRow, Typography} from '@material-ui/core'
import { TableCell, Table, Container} from '@material-ui/core';
import {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme)=>({
    
        table: {
            maxWidth: '80%',
            maxHeight: '400'
        },
        
        paper : {
            padding: theme.spacing(2),
            margin: `${theme.spacing(1)}px auto`,
            textAlign: 'center',
            maxWidth: 400,
            }
        }
    )
)
const langFlag = (language) =>{
    switch(language){
        case 'Turkish':
            return 'TurkeyFlag'
        case 'German':
            return 'GermanFlag'
        case 'English':
            return 'EnglishFlag'
        case 'Dutch':
            return 'DutchFlag'
        default:
            return 'undefined'
            
    }
}

const Course = (props) => {
    //console.log(props)
    const [isOpen, toggle] = useState(false)
    const classes = useStyles()
    const {credits,
           title,
           SWS: timeCom,
           location,
           language, 
           times_manual :schedule,
           Exam
           } = props
    return (
        <React.Fragment>
            <TableRow onClick={() => toggle(!isOpen)} component={Paper} > 
                    <TableCell align="center"> {credits} Cr.</TableCell>
                    <TableCell align="center">{schedule}</TableCell>
                    <TableCell align="left">{title}</TableCell>
                    <TableCell align="center">{location}</TableCell>
                    <TableCell align="center">{langFlag(language)} </TableCell>
                    <Icon aria-label="expand row" size='inherit' >
                    {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </Icon>
            </TableRow>
            
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 2 }} colSpan={5}>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                            <Grid container wrap='nowrap' spacing ={3}>
                                <Grid item xs >
                                    <Paper className={classes.paper}>
                                        <Typography >
                                        
                                        Rating TODO
                                        
                                    </Typography></Paper>
                                
                                </Grid>
                            
                                <Grid item >
                                    <Typography className={classes.paper}>
                                        {
                                        //<Schedule day={}> TODO
                                        times_manual
                                            }
                                        
                                        
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography className={classes.paper}>
                                        
                                        <List>
                                            <ListItemText>Location: {location}</ListItemText>
                                            <ListItemText>Language: {language}</ListItemText>
                                            <ListItemText>Course Type: {type}</ListItemText>
                                            <ListItemText>Credits: {credits}</ListItemText>
                                            <ListItemText>Exam type: {Exam}</ListItemText>
                                            <ListItemText></ListItemText>
                                        </List>
                                        
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Collapse> 
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

const Courses = (props) => {
    {const [open, setOpen] = useState([])}
    const list = props.list
    const classes = useStyles()
    return(
        <Container>
        <TableContainer className={classes.table} >
            <Table stickyHeader>
                <TableHead >
                    <TableRow >
                        <TableCell align="center">credits</TableCell>
                        <TableCell align="center">Time commitment</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="center">Location</TableCell>
                        <TableCell align="center">Language</TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <Divider/>
                <TableBody>
                    {
                        props.list.map(c =>{
                            
                        return(
                            <Course {...c}/>
                        )
                        }) 
                    }
                </TableBody>
            </Table>
            
        </TableContainer>
        </Container>
    )

}

export default Courses;
