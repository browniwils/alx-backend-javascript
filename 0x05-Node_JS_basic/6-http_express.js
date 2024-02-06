#!/usr/bin/node

const express = require('express');

const PORT = 1245;
export const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
