#!user/bin/env node
import chalk from 'chalk';
import clipboardy from 'clipboardy';
import { program } from 'commander';
import createPassword from './utils/createPassword.js';
import savePassword from './utils/savePassword.js';

const log = console.log;

program.version('1.0.0').description('Password Generator');

program
  .option('-l, --length <number>', 'Length of password', '10')
  .option('-s , --save', 'save password to passwords.txt')
  .option('-nn , --no-numbers', 'remove numbers')
  .option('-ns , --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

//? Generated password gets stored in generatedPassword variable

const generatedPassword = createPassword(length, numbers, symbols);

//? saves the new password to file

if (save) {
  savePassword();
}

//* saves to clipboard
clipboardy.writeSync(generatedPassword);

log(chalk.blue('New Password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('New Password copied to clipboard'));
