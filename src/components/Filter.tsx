import {
  Box,
  Divider,
  List,
  ListItem,
  Slider,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import FilterSlider from './FilterSlider';
import { Employee, FilterFunction } from '../types/types';

interface FilterProps {
  onFilterChanged: (filters: FilterFunction[]) => void;
}

interface Filters {
  experienceYearsFilter: FilterFunction;
  freeCapacityFilter: FilterFunction;
}

type numberKey = {
  [K in keyof Employee]: Employee[K] extends number ? K : never;
}[keyof Employee];

const experienceYearMarkOptions = [0, 1, 2, 3, 4, 5];
const experienceYearDefaults = [0, 5];

const freeCapacityMarkOptions = [50, 60, 70, 80, 90, 100];
const freeCapacityDefaults = [50, 100];

function getNumericFilter(
  fieldName: numberKey,
  value: number | number[],
  type?: "min" | "max"
): FilterFunction {
  if (fieldName === undefined) {
    return () => false
  }
  else if (Array.isArray(value) && value.length === 2) {
    return (employee: Employee) =>
    employee[fieldName] >= value[0] && employee[fieldName] <= value[1]
  }
  else if (typeof value === 'number' && (type === 'max' || type === undefined)) {
    return (employee: Employee) => employee[fieldName] <= value;
  }
  else if (typeof value === 'number' && type === 'min') {
    return (employee: Employee) => employee[fieldName] >= value;
  }
  else {
    return () => false
  }
}

const Filter = ({ onFilterChanged }: FilterProps) => {
  const [experienceYears, setExperienceYears] = useState<number[]>([0, 5]);
  const [freeCapacity, setFreeCapacity] = useState<number[]>([50, 100]);

  const [filters, setFilters] = useState<Filters>({
    experienceYearsFilter: getNumericFilter(
      'experienceYears',
      experienceYearDefaults
    ),
    freeCapacityFilter: getNumericFilter('freeCapacity', freeCapacityDefaults),
  });

  // TODO add debounce
  const handleExperienceYearsChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setExperienceYears(newValue as number[]);
    const newFilters: Filters = {
      ...filters,
      experienceYearsFilter: getNumericFilter('experienceYears', newValue),
    };
    setFilters(newFilters);
    onFilterChanged(Object.values(newFilters));
  };

  // TODO add debounce
  const handleFreeCapacityChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setFreeCapacity(newValue as number[]);
    const newFilters: Filters = {
      ...filters,
      freeCapacityFilter: getNumericFilter('freeCapacity', newValue),
    };
    setFilters(newFilters);
    onFilterChanged(Object.values(newFilters));
  };

  return (
    <List>
      <ListItem>
        <Typography marginTop="10px" variant="h5">
          Filter
        </Typography>
      </ListItem>
      <ListItem>
        <Divider />
      </ListItem>
      <ListItem>
        <Box width="90%">
          <FilterSlider
            label="Experience years"
            min={0}
            max={5}
            step={1}
            markOpts={experienceYearMarkOptions.map((val) => ({
              value: val,
              label: `${val}`,
            }))}
            value={experienceYears}
            onChange={handleExperienceYearsChange}
          ></FilterSlider>
          <FilterSlider
            label="Free capacity"
            min={50}
            max={100}
            step={10}
            markOpts={freeCapacityMarkOptions.map((val) => ({
              value: val,
              label: `${val}%`,
            }))}
            value={freeCapacity}
            onChange={handleFreeCapacityChange}
          ></FilterSlider>
        </Box>
      </ListItem>
    </List>
  );
};
export default Filter;
