// 'str'에 해당하는 텍스트 안에 'word'에 해당하는 글자의 수를 찾아내는 코드

function countSpecificWord(str, word) {
  const specificWord = word;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (specificWord.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

// example: console.log(countSpecificWord('Hello World','hw'))
// >> 2
