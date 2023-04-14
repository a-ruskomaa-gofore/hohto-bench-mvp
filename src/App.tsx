import { useEffect, useState } from 'react';
import CardView from './components/CardView';
import mockHohtoService from './services/mockHohtoService';
import { Employee } from './types/types';
import { AppBar, Box, CssBaseline, Drawer, Typography } from '@mui/material';

function App() {
  const [employees, setEmployees] = useState<Array<Employee>>([]);

  useEffect(() => {
    mockHohtoService
      .fetchEmployeeData()
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CssBaseline>
        <AppBar
          position="sticky"
          sx={{ backgroundColor: 'white', color: 'black', paddingBottom: 5 }}
        >
          <Typography component="h1" variant="h3" align="center" paddingTop={2}>
            Header
          </Typography>
        </AppBar>
        <Box paddingLeft={2} paddingTop={2}>
          <CardView employees={employees}></CardView>
          <Drawer variant="permanent" anchor="right"></Drawer>
        </Box>
      </CssBaseline>
    </>
  );
}

export default App;
