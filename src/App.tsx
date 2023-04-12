import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CardView from './components/CardView';
import Sidebar from './components/Sidebar';
import './styles.css';
import mockHohtoService from './services/mockHohtoService';
import { Employee } from './types/types';

function App() {
  const [employees, setEmployees] = useState<Array<Employee>>([]);

  useEffect(() => {
    mockHohtoService.fetchEmployeeData().then(data => {
      setEmployees(data);
    })
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <div className='main-area'>
        <CardView employees={employees}></CardView>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
