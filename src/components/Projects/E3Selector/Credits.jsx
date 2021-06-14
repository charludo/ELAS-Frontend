import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function Credits() {
    const classes = useStyles();
    const [Credits, setCredits] = React.useState('');
  
    const handleChange = (event) => {
      setCredits(event.target.value);
    };
  
    return (
      <div>

<FormControl variant="filled" className={classes.formControl}>
        <InputLabel shrink id="placeholder-label-label">
          E3 Credits needed:
        </InputLabel>
        <Select
          labelId="placeholder-label-label"
          id="placeholder-label"
          value={Credits}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>10</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={1}>1</MenuItem>
        </Select>
        <FormHelperText>Filter Credits:</FormHelperText>
      </FormControl>
      </div>

);
}