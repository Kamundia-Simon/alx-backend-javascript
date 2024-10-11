export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; 
}

const teacher3: Teacher = {
  firstName: 'Simon',
  fullTimeEmployee: false,
  lastName: 'Kamundia',
  location: 'London',
  contract: true,
};

console.log(teacher3);
