#!/usr/bin/env node

export default function iterateThroughObject(reportWithIterator) {
  let finalNames = ""
  for (const name of reportWithIterator) {
    finalNames += `${name}`;
    if (indexOf(name) !== (reportWithIterator.length - 1)) {
        finalNames += " | ";
    }
  }

  return finalNames
}
