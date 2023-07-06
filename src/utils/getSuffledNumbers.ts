import { shuffle } from '@toss/utils';

const getSuffledNumbers = () => {
  const numbers = Array.from({ length: 10 }, (_, i) => i.toString());
  return shuffle(numbers);
};

export default getSuffledNumbers;
