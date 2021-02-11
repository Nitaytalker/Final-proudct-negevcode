import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {FormGroup,FormControlLabel,Checkbox} from '@material-ui/core';



const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className='CheckboxLabels'>
      <FormControlLabel
      style={{textAlign:"left"}}
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label={props.text}
        
      />
      </div>
      
    
  );
}
