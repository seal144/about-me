export const randomNumber = (num1: number, num2: number = 0) => {
  return Math.floor(Math.random() * (Math.abs(num1 - num2) + 1) + Math.min(num1, num2));
};
