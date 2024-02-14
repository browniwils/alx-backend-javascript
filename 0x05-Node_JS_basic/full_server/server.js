#!/usr/bin/node

import express from 'express';
import mapRoutes from './routes';

const PORT = 1245;
const app = express();

mapRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
