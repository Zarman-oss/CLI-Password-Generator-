const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&_-+=';

const createPassword = (length = 10, hasNumbers = true, hasSymbol = true) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : '';
  hasSymbol ? (chars += symbols) : '';
  return chars;
};

export default createPassword;
