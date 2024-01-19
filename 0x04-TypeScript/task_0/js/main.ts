/* Interface for Student object */
export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/* Instances of Student interface */
const wilson: Student = {
  firstName: 'Browni',
  lastName: 'Wilson',
  age: 26,
  location: 'Accra',
};

const rosca: Student = {
  firstName: 'Rosca',
  lastName: 'Bonney',
  age: 22,
  location: 'Obuasi'
};

/* Array of students */
const StudentList: Array<Student> = [
  wilson,
  rosca,
];

/* Render */
export const renderTable = (StudentList: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('tr');

  table.insertAdjacentElement('beforeend', tableHead);

  table.insertAdjacentHTML('beforeend', '<th>First Name</th>');
  table.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of StudentList) {
    const row = document.createElement('tr');
    row.insertAdjacentHTML('beforeend',`<td>${student.firstName}</td>`)
    row.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`)
    table.insertAdjacentElement('beforeend', row);
  }

  document.body.insertAdjacentElement('beforeend', table);
}
