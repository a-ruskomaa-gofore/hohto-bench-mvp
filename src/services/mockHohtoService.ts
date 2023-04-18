import { Employee, EmployeeService } from '../types/types';

const fetchEmployeeData = async (): Promise<Array<Employee>> => {
  return [
    {
      id: 1,
      name: 'Sanni Vanhanen',
      title: 'Frontend developer',
      experienceYears: 2,
      keySkills: ['AWS', 'React'],
      status: 'free',
      utilization: 0,
    },
    {
      id: 2,
      name: 'Klaus Salo',
      title: 'Software developer',
      experienceYears: 1,
      keySkills: ['Java', 'React'],
      status: 'free',
      utilization: 0,
    },
    {
      id: 3,
      name: 'Mark Wolfe',
      experienceYears: 3,
      title: 'Software developer',
      keySkills: ['AWS', 'Java'],
      status: 'free',
      utilization: 0,
    },
    {
      id: 4,
      name: 'Albert Peltonen',
      experienceYears: 2,
      title: 'Software developer',
      keySkills: ['C#', 'React'],
      status: 'offered',
      utilization: 20,
    },
    {
      id: 5,
      name: 'Joakim Tuominen',
      experienceYears: 3,
      title: 'Software developer',
      keySkills: ['Azure', 'React', 'AWS'],
      status: 'free',
      utilization: 0,
    },
    {
      id: 6,
      name: 'Martirio Sandoval',
      experienceYears: 4,
      title: 'Senior software developer',
      keySkills: ['Node', 'Vue'],
      status: 'free',
      utilization: 30,
    },
    {
      id: 7,
      name: 'Mihailo Marković',
      experienceYears: 2,
      title: 'Software developer',
      keySkills: ['Java', 'Javascript'],
      status: 'offered',
      utilization: 0,
    },
    {
      id: 7,
      name: 'Konsta Makkonen-Kukkonen',
      experienceYears: 5,
      title: 'Software architect',
      keySkills: ['Java', 'Javascript', 'AWS', 'React', 'Scrum', 'Node.js', 'C#'],
      status: '2ndRound',
      utilization: 0,
    },
  ];
};

const mockHohtoService: EmployeeService = {
  fetchEmployeeData,
};

export default mockHohtoService;
