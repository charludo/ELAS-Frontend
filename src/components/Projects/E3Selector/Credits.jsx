import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Grid} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 215,
    },
    selectEmpty: {
      marginTop: theme.spacing(5),
    },
  }));

const Credits = (props) => {
    return (
        <Grid item>
            <TextField
                label="E3 Credits needed:"
                defaultValue={props.filterState.credits}
                type="number"
                InputProps={{
                    shrink: true,
                    inputProps: {
                        min: 1,
                        max: 10
                    }
                }}
                onChange={(e) => props.action("credits", e.target.value)}
            />
        </Grid>

    );
}

export default Credits;
