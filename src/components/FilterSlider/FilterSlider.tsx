import React from 'react';
import { Slider, Typography } from '@mui/material';
import './FilterSlider.scss';

type Props = {
  values: number[],
  setValues: (values: number[]) => void,
  minMax: number[],
  title: string,
};

export const FilterSlider:React.FC<Props> = ({
  values, setValues, title, minMax,
}) => {
  const handleChangeValues = (event: Event, newValue: number | number[]) => {
    setValues(newValue as number[]);
  };

  return (
    <div className="filter-slider">
      <div className="filter-slider__title">
        <Typography
          sx={{
            width: '40px',
          }}
        >
          {values[0]}
        </Typography>

        <Typography color="text.secondary">
          {title}
        </Typography>

        <Typography
          sx={{
            width: '40px',
            textAlign: 'right',
          }}
        >
          {values[1]}
        </Typography>
      </div>
      <Slider
        value={values}
        onChange={handleChangeValues}
        valueLabelDisplay="auto"
        min={minMax[0]}
        max={minMax[1]}
      />
    </div>
  );
};
