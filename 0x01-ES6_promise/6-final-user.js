#!/usr/bin/env node

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const uploadPicture = uploadPhoto(fileName);

  return Promise.allSettled([signUp, uploadPicture]).then((responses) => {
    const res = [];
    responses.forEach((response) => {
      if (response.status !== 'fulfilled') {
        res.push({ status: response.status, value: `${response.reason}` });
      } else {
        res.push({ status: response.status, value: response.value });
      }
    });
    return res;
  });
}
