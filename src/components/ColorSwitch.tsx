import { useState } from 'react';
import { Popper, Button } from '@mui/material';
import ColorBox from './ColorBox';
import { ColorType, colors } from '../utils/color';

const ColorSwitch = ({ initColor }: { initColor: ColorType }) => {
  const [currentColor, setCurrentColor] = useState<ColorType>(initColor);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'color-popper' : undefined;

  const renderedItems = colors.map(c => (
    <Button
      key={c}
      onClick={() => {
        setCurrentColor(c);
        setAnchorEl(null);
      }}
    >
      <ColorBox color={c} />
    </Button>
  ));

  return (
    <>
      <Button
        aria-describedby={id}
        onClick={e => {
          setAnchorEl(anchorEl ? null : e.currentTarget);
        }}
        aria-label="color switch"
      >
        <ColorBox color={currentColor} />
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        {renderedItems}
      </Popper>
    </>
  );
};

export default ColorSwitch;
