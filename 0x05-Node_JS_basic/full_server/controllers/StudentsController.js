#!/usr/bin/node

// import { readDatabase } from '../utils';
const readDatabase = require('../utils');

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(filePath)
      .then((stGroups) => {
        const responseParts = ['This is the list of our students'];

        const cmpFxn = (arg, barg) => {
          if (arg[0].toLowerCase() < barg[0].toLowerCase()) {
            return -1;
          }
          if (arg[0].toLowerCase() > barg[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(stGroups).sort(cmpFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        res.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!VALID_MAJORS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(filePath)
      .then((stGroups) => {
        let responseText = '';

        if (Object.keys(stGroups).includes(major)) {
          const group = stGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        res.status(200).send(responseText);
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

module.exports = StudentsController;
