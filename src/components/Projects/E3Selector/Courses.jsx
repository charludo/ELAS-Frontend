import React, { useState } from 'react';
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
import hSelect from "./data.js"
const useStyles = makeStyles((theme)=>({

        table: {
            maxWidth: '80%',
            maxHeight: '400'
        },
        root: {
            '& > *': {
              borderBottom: 'unset',
            }},
        paper : {
            padding: theme.spacing(2),
            margin: `${theme.spacing(1)}px auto`,
            textAlign: 'center',
            maxWidth: 400,
            },
        
        })
)
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

const Course = (props) => {
    //console.log(props)
    const [isOpen, toggle] = useState(false)
    const fc = props.handleSel
    const [isSelected, setSelect] = useState(props.selected)
    const handleSelect = () =>{
        setSelect(!isSelected)

        props.passedonfc(Title)
    }

    const classes = useStyles()
    const {Credits,
           Title,
           SWS: timeCom,
           Location,
           Type,
           Language,
           Times_manual :schedule,
           Exam,
           passedonfc
           } = props
    if(isSelected){
        return(
            <TableRow className={classes.root} >
                    <IconButton>
                        <DeleteIcon button color="action" onClick={() => handleSelect()}/>
                    </IconButton>
                    <TableCell align="center" onClick={() => toggle(!isOpen)}> {Credits} Cr.</TableCell>
                    <TableCell align="left" onClick={() => toggle(!isOpen)} >{Title}</TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)} >{Location}</TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)} >{langFlag(Language)} </TableCell>
            

            </TableRow>
        )
    }
    return (
        <React.Fragment>
            
            <TableRow className={classes.root} >
                    <IconButton>
                        <AddIcon button color="action" onClick={() => handleSelect()}/>
                    </IconButton>
                    <TableCell align="center" onClick={() => toggle(!isOpen)}> {Credits} Cr.</TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)} >{timeCom}</TableCell>
                    <TableCell align="left" onClick={() => toggle(!isOpen)} >{Title}</TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)} >{Location}</TableCell>
                    <TableCell align="center" onClick={() => toggle(!isOpen)} >{langFlag(Language)} </TableCell>
                        {
                        <Icon aria-label="expand row" size='inherit'  onClick={() => toggle(!isOpen)} >
                        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </Icon>
}
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
                                        schedule
                                            }


                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography className={classes.paper}>

                                        <List>
                                            <ListItemText>Location: {Location}</ListItemText>
                                            <ListItemText>Language: {Language}</ListItemText>
                                            <ListItemText>Course Type: {Type}</ListItemText>
                                            <ListItemText>Credits: {Credits}</ListItemText>
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
    const [open, setOpen] = useState([])
    const [list, setList] = useState(props.list)
    const [selectedList, setSelectedList] = useState([])
    
    const classes = useStyles()

    const handleSel = (title) => {
        if(list.find( (element)=>(element.Title == title)
        )){
            setList(list.filter( c => c.Title !== title))
            setSelectedList(selectedList.concat(list.find( (element)=>{
                return element.Title == title
            })))
            
        }else{
            setSelectedList(setSelectedList.filter( c => c.Title !== title))
            setList(list.concat(selectedList.find( (element)=>{
                return element.Title == title
            })))
            
        }
        
    }       
    
    return( 
            <Container>
                <Table>
                {
                    
                    selectedList.map( c => {
                        return(<Course {...c} passedonfc={handleSel}/>)
                    })
                }
                </Table>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead >
                        <TableRow >
                            <TableCell/>
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
                            
                            list.map( entry => {
                                return(<Course {...entry} handleSel/>)
                                
                            })
                        }
                    </TableBody>
                </Table>

            </TableContainer>
            </Container>
            
    )

}

export default Courses;
