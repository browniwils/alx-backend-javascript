#!/usr/bin/env node

export default function createIteratorObject(report) {
  return [...report.allEmployees.engineering]
}
