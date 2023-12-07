#!/usr/bin/env node

export default function getResponseFromAPI() {
  return new Promise((resolved, rejected) => {
    resolved('Hi Mom');
    rejected(new Error('Rejected'));
  });
}
