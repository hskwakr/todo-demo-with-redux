import { useState } from 'react';
import { Grid, Input } from '@mui/material';
import ColorSwitch from './ColorSwitch';
import { ColorType } from '../utils/color';

const NewTodo = () => {
  const [color, setColor] = useState<ColorType>('gray');

  return (
    <Grid container alignItems="center">
      <Grid item>
        <ColorSwitch
          initColor={color}
          onColorUpdated={c => {
            setColor(c);
          }}
        />
      </Grid>

      <Grid item>
        <Input placeholder="Enter TODO..." />
      </Grid>
    </Grid>
  );
};

export default NewTodo;
