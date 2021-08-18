const vowels = ["a", "e", "i", "o", "u"];

const findVowelsCount = (str) => {
  // complete this function

  const vowel = str.split("");

  let vowelCount = 0;

  // eslint-disable-next-line array-callback-return
  vowel.map((vl) => {
    if (vowels.find((vol) => vol === vl)) vowelCount = vowelCount + 1;
  });
  return vowelCount;
};

(findVowelsCount("Hello World"));
// output: 3
