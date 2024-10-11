export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
  firstName: 'Simon',
  lastName: 'Kamundia',
  age: 22,
  location: 'Moscow',
};

const student2: Student = {
    firstName: 'Simon',
    lastName: 'Makonde',
    age: 7,
    location: 'Misheveve',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const body = document.createElement('body');

studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    body.appendChild(row);
});

table.appendChild(body);
document.body.appendChild(table);
