import { useState } from 'react';
import { Button, Grid, Box, Popover } from '@mui/material';
import ColorBox from './ColorBox';
import { ColorType, colors } from '../utils/color';

interface ColorSwitchProps {
  initColor: ColorType;
  onColorUpdated: (color: ColorType) => void;
}

const ColorSwitch = ({ initColor, onColorUpdated }: ColorSwitchProps) => {
  const [currentColor, setCurrentColor] = useState<ColorType>(initColor);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'color-popper' : undefined;

  const renderedItems = colors.map(c => (
    <Grid item key={c}>
      <Button
        onClick={() => {
          setCurrentColor(c);
          onColorUpdated(c);
          setAnchorEl(null);
        }}
        data-testid="color-switch-pop-elms"
        sx={{
          minWidth: 20,
        }}
      >
        <ColorBox color={c} />
      </Button>
    </Grid>
  ));

  return (
    <>
      <Button
        aria-describedby={id}
        onClick={e => {
          setAnchorEl(anchorEl ? null : e.currentTarget);
        }}
        data-testid="color-switch"
      >
        <ColorBox color={currentColor} />
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Box p="10px" mt="5px">
          <Grid container spacing={1}>
            {renderedItems}
          </Grid>
        </Box>
      </Popover>
    </>
  );
};

export default ColorSwitch;
