#!/usr/bin/node

import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  if (filePath) {
    fs.readFile(filePath, (err, data) => {
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
        resolve(stGroups);
      }
    });
  }
});

module.exports = readDatabase;
