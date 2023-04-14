import { Employee } from '../types/types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

interface CardProps {
  employee: Employee;
}

const EmployeeCard = ({ employee }: CardProps) => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: '#f9f9f9' }}>
      <CardContent>
        <Grid container spacing={1}>
          {/* Name */}
          <Grid item xs={10}>
            <Typography variant="subtitle1">{employee.name}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Chip
              label={employee.freeCapacity + '%'}
              sx={{ margin: '1px' }}
            ></Chip>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {/* Avatar + experience */}
          <Grid item xs={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item xs={4}>
                <Box marginBottom={1}>
                  <Avatar></Avatar>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Chip
                  label={employee.experienceYears + ' years'}
                  sx={{ margin: '1px' }}
                ></Chip>
              </Grid>
            </Grid>
          </Grid>
          {/* Key skills */}
          <Grid item xs={9}>
            {employee.keySkills.slice(0, 6).map((skill) => (
              <Chip
                label={skill}
                sx={{
                  margin: '3px',
                  backgroundColor: '#06c2c8',
                  color: 'white',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  borderRadius: 2,
                }}
                key={employee.id}
              ></Chip>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
