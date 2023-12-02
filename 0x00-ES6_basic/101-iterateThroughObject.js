#!/usr/bin/env node

export default function iterateThroughObject(reportWithIterator) {
  let finalNames = ""
  for (const name of reportWithIterator) {
    finalNames += name
  }

  return finalNames
}
