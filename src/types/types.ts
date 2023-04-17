export interface Employee {
  id: number;
  name: string;
  imageUrl?: string;
  experienceYears: number;
  freeCapacity: number;
  keySkills: Array<string>;
  status: 'free' | 'offered' | '2ndRound';
}

export interface EmployeeService {
  fetchEmployeeData: () => Promise<Array<Employee>>;
}

export type FilterFunction = (value: Employee) => boolean