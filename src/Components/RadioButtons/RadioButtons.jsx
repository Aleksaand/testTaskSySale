import React from 'react';
import './RadioButtons.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtons() {
  const [value, setValue] = React.useState(100);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(value);

  return (
    <FormControl component="fieldset" className="radioButtons">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="100" className="radioItem" control={<Radio />} label="100 мл" />
        <FormControlLabel value="200" className="radioItem" control={<Radio />} label="200 мл" />
        <FormControlLabel value="300" className="radioItem" control={<Radio />} label="300 мл" />
        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>
  );
}
