import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { StatusType, createRenderedItems, Status } from '../utils/status';
import { useAppDispatch } from '../store/hooks';
import { filterStatusUpdated } from '../store/filtersSlice';

const StatusFilter = () => {
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState<StatusType>(Status.All);

  const renderedItems = createRenderedItems((key, value) => {
    const selected = current === value;
    const id = `status-filter-item-${value}`;

    return (
      <Grid item key={key} data-testid={id}>
        <Button
          disabled={selected}
          onClick={() => {
            setCurrent(value);
            dispatch(filterStatusUpdated(value));
          }}
        >
          {key}
        </Button>
      </Grid>
    );
  });

  return (
    <Grid container spacing={2} data-testid="status-filter">
      {renderedItems}
    </Grid>
  );
};

export default StatusFilter;
