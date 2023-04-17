import Grid from '@mui/material/Grid';
import { Employee } from '../types/types';
import CardList from './CardList';

interface CardViewProps {
  employees: Array<Employee>;
}

const CardView = ({ employees }: CardViewProps) => {
  const categories = [
    {
      title: '2nd round',
      filter: (employee: Employee) => employee.status === '2ndRound',
    },
    {
      title: 'Offered',
      filter: (employee: Employee) => employee.status === 'offered',
    },
    {
      title: 'Free',
      filter: (employee: Employee) => employee.status === 'free',
    },
  ];

  const cardLists = categories.map(({ title, filter }) => {
    const filteredEmployees = employees.filter(filter);

    return filteredEmployees.length > 0 ? (
      <Grid item sm={12} md={6} lg={4} padding={2} key={title}>
        <CardList title={title} employees={filteredEmployees}></CardList>
      </Grid>
    ) : null;
  });

  return (
    <Grid container spacing={2} justifyContent='flex-end'>
      {cardLists}
    </Grid>
  );
};

export default CardView;
