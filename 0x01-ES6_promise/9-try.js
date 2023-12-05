#!/usr/bin/env node

export default function guardrail(mathFunction) {
    const listStack = [];
    try {
      listStack.push(mathFunction());
    } catch (err) {
      listStack.push(`Error: ${err.message}`);
    } finally {
      listStack.push('Guardrail was processed');
    }
    return listStack;
  }
