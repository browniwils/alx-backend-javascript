/* Create a function updateStudentGradeByCity that returns
 an array of students for a specific city with their new grade

It should accept a list of students (from getListStudents), 
a city (String), and newGrades (Array of “grade” objects) as parameters.

newGrades is an array of objects with this format:
  {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.

You must use filter and map combined. */

export default function updateStudentGradeByCity(studArray, city, newGrades) {
  if (!Array.isArray(studArray)) {
    throw new TypeError(`${studArray} is not a valid student array`);
  }
  if (typeof city !== 'string') {
    throw new TypeError(`${city} is not a valid city name`);
  }
  if (!Array.isArray(newGrades)) {
    throw new TypeError(`${newGrades} is not a valid grades array`);
  }

  const cityStudents = studArray.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    for (const gradesData of newGrades) {
      if (!student.hasOwnProperty('grade')) {
        student.grade = 'N/A';
      }
      if (gradesData.studentId === student.id) {
        student.grade = gradesData.grade;
      }
    }
    return student;
  });
}
