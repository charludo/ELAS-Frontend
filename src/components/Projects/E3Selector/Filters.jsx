import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Filters(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Location</FormLabel>
      <FormGroup aria-label="position" row>


      <FormControlLabel
          value="end"
<<<<<<< HEAD
=======
          control={<Checkbox defaultChecked={true} onClick={() => props.action("locales", "Essen")} color="primary"/>}
>>>>>>> 44f9a1c6c9d151316152feb9e38ee5441f06fa8e
          label="Essen"
          labelPlacement="end"
        />

<br/><br/><FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} onClick={() => props.action("locales", "Duisburg")} color="primary" />}
          label="Duisburg"
          labelPlacement="end"
        />

<br/><br/><FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Bochum"
          labelPlacement="end"
          />

 <FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Dortmund"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Written"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Oral"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Essay"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Presentation"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="German"
          labelPlacement="end"
        />


        <FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="English"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Turkish"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Dutch"
          labelPlacement="end"
        />


<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Lecture + Exercise"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Lecture"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Seminar"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="Blocked Seminar"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" />}
          label="E-Learning"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}
