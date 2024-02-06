#!/usr/bin/node

const fs = require('fs');

export const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const stGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const stPropNames = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const stRecord = line.split(',');
        const studentPropValues = stRecord
          .slice(0, stRecord.length - 1);
        const field = stRecord[stRecord.length - 1];
        if (!Object.keys(stGroups).includes(field)) {
          stGroups[field] = [];
        }
        const stEntries = stPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        stGroups[field].push(Object.fromEntries(stEntries));
      }

      const sTotal = Object
        .values(stGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${sTotal}`);
      for (const [field, group] of Object.entries(stGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});
