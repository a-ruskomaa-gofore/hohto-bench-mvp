import { Employee } from '../types/types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from '@mui/material';

interface CardProps {
  employee: Employee;
}

const EmployeeCard = ({ employee }: CardProps) => {
  return (
    <Card elevation={1}>
      <CardContent>
        <Grid container spacing={1}>
          {/* Name */}
          <Grid item xs={12}>
            <Typography variant="subtitle1">{employee.name}</Typography>
          </Grid>
          {/* Avatar + experience */}
          <Grid item xs={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item xs={8}>
                <Box marginBottom={1}>
                  <Avatar></Avatar>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Chip label={employee.experienceYears + ' years'}></Chip>
              </Grid>
            </Grid>
          </Grid>
          {/* Key skills */}
          <Grid item xs={9}>
            {employee.keySkills.slice(0, 6).map((skill) => (
              <Chip label={skill} sx={{ margin: '3px' }}></Chip>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
