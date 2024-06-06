const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&_-+=';

const generatePassword = (length, chars) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const createPassword = (length = 8, hasNumbers = true, hasSymbol = true) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : '';
  hasSymbol ? (chars += symbols) : '';

  return generatePassword(length, chars);
};

export default createPassword;
