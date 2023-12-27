/* Create a function getStudentIdsSum that returns the sum of all the student ids.

It should accept a list of students (from getListStudents) as a parameter.

You must use the reduce function on the array. */

export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    throw new TypeError(`${students} is not a valid array`);
  }
  const studentIds = students.map((student) => student.id);
  return studentIds
  .reduce((accumulator, currentValue) => accumulator + currentValue);
}
