import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DeleteIcon, DeleteForeverIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      color: theme.palette.text.primary,
    },
  },
}));

export default function littlepopup(props) {
  const classes = useStyles();

  return (
     <Grid container className={classes.root}>
    <Paper elevation={3} />
    <Grid item xs={4}>
      <Typography>Filled</Typography>
    </Grid>
    <Grid item xs={8}>
      <DeleteIcon />
      <DeleteForeverIcon />
    </Grid>
    </Grid>
     );
    }
