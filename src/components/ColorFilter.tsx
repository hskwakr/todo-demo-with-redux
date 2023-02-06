import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ColorBox from './ColorBox';
import { Color, colors } from '../utils/color';

const ColorFilter = () => {
  const [color, setColor] = useState<Color | null>(null);

  return (
    <Grid container spacing={2}>
      {colors.map(c => {
        const selected = color === c;

        return (
          <Grid item key={c}>
            <Button disabled={selected} onClick={() => setColor(c)}>
              <ColorBox color={c} />
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ColorFilter;
