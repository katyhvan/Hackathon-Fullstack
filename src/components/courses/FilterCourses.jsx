import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useCourses } from "../../contesxts/CoursesContextProvider";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useCourses();

  return (
    <FormControl style={{marginLeft: '1%', display: 'flex', }}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="maxprice"
        onChange={(e) => fetchByParams("price", e.target.value)}
      >
        <FormControlLabel value="price" control={<Radio />} label="max Price" />
        <FormControlLabel value="price" control={<Radio />} label="min Price" />
      </RadioGroup>
    </FormControl>
  );
}
