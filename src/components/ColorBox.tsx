import Box from '@mui/material/Box';

interface ColorBoxProps {
  color: string;
}

const ColorBox = ({ color }: ColorBoxProps) => (
  <Box
    sx={{
      width: 30,
      height: 30,
      backgroundColor: color,
    }}
    data-testid="color-box"
  />
);

export default ColorBox;
