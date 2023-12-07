#!/usr/bin/env

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((downloadData) => downloadData);
}
