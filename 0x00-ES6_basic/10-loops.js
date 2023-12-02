#!/usr/bin/env node

export default function appendToEachArrayValue(array, appendString) {
    const arr = [];
    for (const idx of array) {
      arr.push(`${appendString}${idx}`);
    }

    return arr;
}
