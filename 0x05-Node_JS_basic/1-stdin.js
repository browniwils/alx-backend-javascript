#!/usr/bin/node

// Script display the message Welcome to Holberton School,
// what is your name and  users input their name on a new line
// When the user ends the program, it should display
// This important software is now closing

/**
 * Displaying of information and ask for input.
 */
function run() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.on('readable', () => {
    const commandLineInput = process.stdin.read();
    if (commandLineInput) {
      process.stdout.write(`Your name is: ${commandLineInput}`);
    }
  });
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

run();
