export interface Employee {
  id: number;
  name: string;
  title: string;
  imageUrl?: string;
  experienceYears: number;
  utilization: number;
  keySkills: Array<string>;
  status: 'free' | 'offered' | '2ndRound';
}

export interface EmployeeService {
  fetchEmployeeData: () => Promise<Array<Employee>>;
}

export type FilterFunction = (value: Employee) => boolean