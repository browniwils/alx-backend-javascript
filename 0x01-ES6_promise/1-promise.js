#!/usr/bin/env node

export default function getFullResponseFromAPI(success) {
  return new Promise((resolved, rejected) => {
    if (success) {
      resolved({
        status: 200,
        body: 'Success',
      });
    } else {
      rejected(new Error('The fake API is not working currently'));
    }
  });
}
