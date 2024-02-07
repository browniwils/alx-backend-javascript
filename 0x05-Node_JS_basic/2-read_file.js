#!/usr/bin/node

const fs = require('fs');

const countStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs
    .readFileSync(filePath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const stGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const sRecord = line.split(',');
    const sPropValues = sRecord.slice(0, sRecord.length - 1);
    const field = sRecord[sRecord.length - 1];
    if (!Object.keys(stGroups).includes(field)) {
      stGroups[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, sPropValues[idx]]);
    stGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalPeople = Object
    .values(stGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalPeople}`);
  for (const [field, group] of Object.entries(stGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console
      .log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

export default countStudents;
module.exports = countStudents;
