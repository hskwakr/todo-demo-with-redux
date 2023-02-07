import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { StatusType, createRenderedItems, status } from '../utils/status';

const StatusFilter = () => {
  const [current, setCurrent] = useState<StatusType>(status.All);

  const renderedItems = createRenderedItems((key, value) => {
    const selected = current === key;

    return (
      <Grid item key={key}>
        <Button disabled={selected} onClick={() => value && setCurrent(value)}>
          {key}
        </Button>
      </Grid>
    );
  });

  return (
    <Grid container spacing={2}>
      {renderedItems}
    </Grid>
  );
};

export default StatusFilter;
