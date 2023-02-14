import { useState } from 'react';
import { Grid, Input } from '@mui/material';
import ColorSwitch from './ColorSwitch';
import { ColorType } from '../utils/color';
import { useAppDispatch } from '../store/hooks';
import { todoAdded } from '../store/todosSlice';

const NewTodo = () => {
  const dispatch = useAppDispatch();
  const [color, setColor] = useState<ColorType>('gray');
  const [text, setText] = useState('');

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
        <Input
          placeholder="Enter TODO..."
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
          onKeyDown={e => {
            const trimmed = e.currentTarget.value.trim();

            if (e.key === 'Enter' && trimmed) {
              dispatch(todoAdded(text, color));
              setText('');
            }
          }}
        />
      </Grid>
    </Grid>
  );
};

export default NewTodo;
