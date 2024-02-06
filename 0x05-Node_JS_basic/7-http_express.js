#!/usr/bin/node

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

export const countStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const stGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const stPropNames = dbFieldNames.slice(
          0,
          dbFieldNames.length - 1,
        );

        for (const line of fileLines.slice(1)) {
          const stRecord = line.split(',');
          const stPropValues = stRecord.slice(
            0,
            stRecord.length - 1,
          );
          const field = stRecord[stRecord.length - 1];
          if (!Object.keys(stGroups).includes(field)) {
            stGroups[field] = [];
          }
          const stEntries = stPropNames.map((propName, idx) => [
            propName,
            stPropValues[idx],
          ]);
          stGroups[field].push(Object.fromEntries(stEntries));
        }

        const totalStudents = Object.values(stGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(stGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
