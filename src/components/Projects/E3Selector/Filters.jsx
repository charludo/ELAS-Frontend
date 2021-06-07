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
<<<<<<< HEAD
=======
          control={<Checkbox defaultChecked={true} onClick={() => props.action("locales", "Essen")} color="primary"/>}
>>>>>>> 44f9a1c6c9d151316152feb9e38ee5441f06fa8e
=======
          control={<Checkbox defaultChecked={true} onClick={() => {props.action("locales", "Essen"); props.action("locales", "Essen (UKE)");}} color="primary"/>}
>>>>>>> eaf2332090c8d53319c149b7379ecc1be878ee80
          label="Essen"
          labelPlacement="end"
        />

<br/><br/><FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} onClick={() => {props.action("locales", "Duisburg"); props.action("locales", "Duisburg (B)"); props.action("locales", "Duisburg (L/M)");}} color="primary" />}
          label="Duisburg"
          labelPlacement="end"
        />

<br/><br/><FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("locales", "Bochum")}/>}
          label="Bochum"
          labelPlacement="end"
          />

 <FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("locales", "Dortmund")}/>}
          label="Dortmund"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => {props.action("exam", "Schriftliche Ausarbeitung");props.action("exam", "Klausur")}}/>}
          label="Written"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("exam", "Mündliche Prüfung")}/>}
          label="Oral"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("exam", "Essay")}/>}
          label="Essay"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("exam", "Präsentation")}/>}
          label="Presentation"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("languages", "Deutsch")}/>}
          label="German"
          labelPlacement="end"
        />


        <FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("languages", "Englisch")}/>}
          label="English"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("languages", "Türkisch")}/>}
          label="Turkish"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("languages", "Niederländisch")}/>}
          label="Dutch"
          labelPlacement="end"
        />


<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("courseType", "VL/Übung")}/>}
          label="Lecture + Exercise"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("courseType", "Vorlesung")}/>}
          label="Lecture"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("courseType", "Seminar")}/>}
          label="Seminar"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("courseType", "Blockseminar")}/>}
          label="Blocked Seminar"
          labelPlacement="end"
        />

<FormControlLabel
          value="end"
          control={<Checkbox defaultChecked={true} color="primary" onClick={() => props.action("courseType", "E-Learning")}/>}
          label="E-Learning"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}
