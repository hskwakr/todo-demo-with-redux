import Box from '@mui/material/Box';

interface ColorBoxProps {
  color: string;
}

const ColorBox = ({ color }: ColorBoxProps) => (
  <Box
    sx={{
      width: 20,
      height: 20,
      backgroundColor: color,
    }}
    data-testid="color-box"
  />
);

export default ColorBox;
