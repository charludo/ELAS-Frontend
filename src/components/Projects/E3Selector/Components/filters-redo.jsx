import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const Checkboxes = (props) => (

<FormGroup>
<FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label=""
          labelPlacement="end"
        />
      </FormGroup>
);

export default Checkboxes;
