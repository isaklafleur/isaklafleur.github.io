function anagramCounter(wordsArray) {
  var counter = 0;
  var words = wordsArray.map(word =>
    word
      .split("")
      .sort()
      .join(""),
  );
  console.log(words);

  words.forEach((word1, index1, array) => {
    array.forEach((word2, index2) => {
      console.log(index1, index2);
      console.log(word1, word2);
      if (index1 !== index2 && word1 === word2) {
        counter++;
      }
    });
  });
  console.log(counter / 2);
  return counter / 2;
}

const words = ["dell", "ledl", "abc", "cba"];

anagramCounter(words);
