import { useEffect, useState } from 'react';
import CardView from './components/CardView';
import mockHohtoService from './services/mockHohtoService';
import { Employee, FilterFunction } from './types/types';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
} from '@mui/material';
import Filter from './components/Filter';

function App() {
  const [employees, setEmployees] = useState<Array<Employee>>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Array<Employee>>([]);

  const handleFilterChange = (filters: FilterFunction[]) => {
    const filtered = employees.filter(employee => filters.every(filter => filter(employee)));
    console.log(filtered);
    setFilteredEmployees(filtered);
  }

  useEffect(() => {
    mockHohtoService
      .fetchEmployeeData()
      .then((data) => {
        setEmployees(data);
        setFilteredEmployees(data);
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
          sx={{
            backgroundColor: 'white',
            color: 'black',
            paddingBottom: 5,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography component="h1" variant="h3" align="center">
              Bench situation
            </Typography>
          </Toolbar>
        </AppBar>
        <Box paddingLeft={2} paddingTop={2} sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1 }}>
            <CardView employees={filteredEmployees}></CardView>
          </Box>
          <Drawer
            variant="permanent"
            anchor="right"
            sx={{
              width: 250,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 250,
                boxSizing: 'border-box',
              },
            }}
          >
            <Box sx={{ paddingBottom: 5 }}>
              <Toolbar />
            </Box>
            <Filter onFilterChanged={handleFilterChange}></Filter>
          </Drawer>
        </Box>
      </CssBaseline>
    </>
  );
}

export default App;
