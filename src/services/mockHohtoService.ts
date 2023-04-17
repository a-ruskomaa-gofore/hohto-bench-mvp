import { Employee, EmployeeService } from '../types/types';

const fetchEmployeeData = async (): Promise<Array<Employee>> => {
  return [
    {
      id: 1,
      name: 'Sanni Vanhanen',
      experienceYears: 2,
      keySkills: ['AWS', 'React'],
      status: 'free',
      freeCapacity: 100,
    },
    {
      id: 2,
      name: 'Klaus Salo',
      experienceYears: 1,
      keySkills: ['Java', 'React'],
      status: 'free',
      freeCapacity: 100,
    },
    {
      id: 3,
      name: 'Mark Wolfe',
      experienceYears: 3,
      keySkills: ['AWS', 'Java'],
      status: 'free',
      freeCapacity: 100,
    },
    {
      id: 4,
      name: 'Albert Peltonen',
      experienceYears: 2,
      keySkills: ['C#', 'React'],
      status: 'offered',
      freeCapacity: 80,
    },
    {
      id: 5,
      name: 'Joakim Tuominen',
      experienceYears: 3,
      keySkills: ['Azure', 'React', 'AWS'],
      status: 'free',
      freeCapacity: 100,
    },
    {
      id: 6,
      name: 'Martirio Sandoval',
      experienceYears: 4,
      keySkills: ['Node', 'Vue'],
      status: 'free',
      freeCapacity: 70,
    },
    {
      id: 7,
      name: 'Mihailo Marković',
      experienceYears: 2,
      keySkills: ['Java', 'Javascript'],
      status: 'offered',
      freeCapacity: 100,
    },
    {
      id: 7,
      name: 'Konsta Makkonen-Kukkonen',
      experienceYears: 5,
      keySkills: ['Java', 'Javascript', 'AWS', 'React', 'Scrum', 'Node.js', 'C#'],
      status: '2ndRound',
      freeCapacity: 100,
    },
  ];
};

const mockHohtoService: EmployeeService = {
  fetchEmployeeData,
};

export default mockHohtoService;
