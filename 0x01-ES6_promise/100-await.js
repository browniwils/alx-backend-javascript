#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadPicture = await uploadPhoto();
    const signUpUser = await createUser();
    return {
      photo: uploadPicture,
      user: signUpUser,
    };
  } catch
  (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
