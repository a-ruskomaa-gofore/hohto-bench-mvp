import Grid from '@mui/material/Grid';
import { Employee } from '../types/types';
import CardList from './CardList';
import { Container } from '@mui/material';

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

  const cardLists = categories.map(({ title, filter }) => (
    <Grid item xs={12} sm={6} md={4} padding={2}>
      <CardList title={title} employees={employees.filter(filter)}></CardList>
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {cardLists}
    </Grid>
  );
};

export default CardView;
