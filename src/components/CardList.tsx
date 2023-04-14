import { Grid, Paper, Typography } from '@mui/material';
import { Employee } from '../types/types';
import EmployeeCard from './EmployeeCard';

type CardListProps = {
  title: string;
  employees: Array<Employee>;
};

const CardList = ({ title, employees }: CardListProps) => {
  const cards = employees.map((employee) => (
    <Grid item xs>
      <EmployeeCard employee={employee}></EmployeeCard>
    </Grid>
  ));

  return (
    <Paper variant="outlined">
      <Grid container direction="column" spacing={2} padding="10px">
        <Grid item xs>
          <Typography variant="h5">{title}</Typography>
        </Grid>
        {cards}
      </Grid>
    </Paper>
  );
};

export default CardList;
