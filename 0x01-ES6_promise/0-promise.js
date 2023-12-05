#!/usr/bin/env node

export default function getResponseFromAPI() {
    return new Promise((res, rej) => {
      res('Hi Mom');
      rej('Rejected');
    });
  }
