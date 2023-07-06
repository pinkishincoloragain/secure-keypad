import { shuffle } from '@toss/utils';

const getSuffledAlphabets = () => {
  return shuffle(
    Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65))
  );
};

export default getSuffledAlphabets;
