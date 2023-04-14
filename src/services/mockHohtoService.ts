import { Employee, EmployeeService } from '../types/types';

const fetchEmployeeData = async (): Promise<Array<Employee>> => {
  return [
    {
      name: 'Test employee 1',
      experienceYears: 2,
      keySkills: ['AWS', 'React'],
      status: 'free',
      freeCapacity: 100,
    },
    {
      name: 'Test employee 2',
      experienceYears: 1,
      keySkills: ['Java', 'React'],
      status: 'free',
      freeCapacity: 100,
    },
    {
      name: 'Test employee 3',
      experienceYears: 3,
      keySkills: ['AWS', 'Java'],
      status: 'free',
      freeCapacity: 100,
    },
    {
      name: 'Test employee 4',
      experienceYears: 2,
      keySkills: ['C#', 'React'],
      status: 'offered',
      freeCapacity: 80,
    },
    {
      name: 'Test employee 5',
      experienceYears: 3,
      keySkills: ['Azure', 'React', 'AWS'],
      status: 'free',
      freeCapacity: 100,
    },
    {
      name: 'Test employee 6',
      experienceYears: 4,
      keySkills: ['Node', 'Vue'],
      status: 'free',
      freeCapacity: 70,
    },
    {
      name: 'Test employee 7',
      experienceYears: 2,
      keySkills: ['Java', 'Javascript'],
      status: 'offered',
      freeCapacity: 100,
    },
  ];
};

const mockHohtoService: EmployeeService = {
  fetchEmployeeData,
};

export default mockHohtoService;
