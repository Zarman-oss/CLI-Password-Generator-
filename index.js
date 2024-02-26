import { program } from 'commander';
import createPassword from './utils/createPassword.js';

const log = console.log;

program.version('1.0.0').description('Password Generator');

program
  .option('-l, --length <number>', 'Length of password', '10')
  .option('-s , --save', 'save password to passwords.txt')
  .option('-nn , --no-numbers', 'remove numbers')
  .option('-ns , --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

//what is=> Generated password gets stored in generatedPassword variable

const generatedPassword = createPassword(length, numbers, symbols);

log(numbers, symbols);
