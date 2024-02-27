import { fileURLToPath } from 'url';
import { dirname, join } from 'path'; // Import join from path
import fs from 'fs';
import os from 'os';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const savePassword = (password) => {
  fs.open(join(__dirname, '../', 'password.txt'), 'a', 666, (e, id) => {
    // Use join from path
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green('New Password saved to passwords.txt'));
      });
    });
  });
};

export default savePassword;
