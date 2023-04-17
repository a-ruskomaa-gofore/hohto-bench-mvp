import { Slider, Typography } from '@mui/material';

interface FilterSliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number | number[];
  markOpts: any[];
  onChange: (event: Event, value: number | number[]) => void
}

const FilterSlider = ({
  label,
  min,
  max,
  step,
  value,
  markOpts,
  onChange
}: FilterSliderProps) => {
  return (
    <>
      <Typography id={`${label.replace(' ', '-').toLowerCase()}-slider`}>{label}</Typography>
      <Slider
        sx={{color: 'grey'}}
        aria-labelledby={`${label.replace(' ', '-').toLowerCase()}-slider`}
        min={min}
        max={max}
        step={step}
        marks={markOpts}
        value={value}
        valueLabelDisplay="auto"
        onChange={onChange}
      ></Slider>
    </>
  );
};

export default FilterSlider;
