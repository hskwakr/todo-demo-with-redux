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
    aria-label="color box"
  />
);

export default ColorBox;
