/* Create a function getStudentsByLocation that returns an
array of objects who are located in a specific city.

It should accept a list of students (from getListStudents)
and a city (string) as parameters.

You must use the filter function on the array. */

export default function getStudentsByLocation(students, city) {
  if (typeof city !== 'string') {
    throw new TypeError('City must be a string');
  }
  if (!Array.isArray(students)) {
    throw new TypeError('Students must be an array of objects');
  }

  return students.filter((student) => student.location === city);
}
