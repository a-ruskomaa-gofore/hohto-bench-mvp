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
  utilizationFilter: FilterFunction;
}

type numberKey = {
  [K in keyof Employee]: Employee[K] extends number ? K : never;
}[keyof Employee];

const experienceYearMarkOptions = [0, 1, 2, 3, 4, 5];
const experienceYearDefaults = [0, 5];

const utilizationMarkOptions = [0, 10, 20, 30, 40, 50];
const utilizationDefaults = [0, 50];

function getNumericFilter(
  fieldName: numberKey,
  value: number | number[],
  type?: "min" | "max"
): FilterFunction {
  if (fieldName === undefined) {
    return () => true
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
    return () => true
  }
}

const Filter = ({ onFilterChanged }: FilterProps) => {
  const [experienceYears, setExperienceYears] = useState<number[]>(experienceYearDefaults);
  const [utilization, setUtilization] = useState<number[]>(utilizationDefaults);

  const [filters, setFilters] = useState<Filters>({
    experienceYearsFilter: getNumericFilter(
      'experienceYears',
      experienceYearDefaults
    ),
    utilizationFilter: getNumericFilter('utilization', utilizationDefaults),
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
  const handleUtilizationChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setUtilization(newValue as number[]);
    const newFilters: Filters = {
      ...filters,
      utilizationFilter: getNumericFilter('utilization', newValue),
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
            label="Work experience"
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
            label="Utilization"
            min={0}
            max={50}
            step={10}
            markOpts={utilizationMarkOptions.map((val) => ({
              value: val,
              label: `${val}%`,
            }))}
            value={utilization}
            onChange={handleUtilizationChange}
          ></FilterSlider>
        </Box>
      </ListItem>
    </List>
  );
};
export default Filter;
