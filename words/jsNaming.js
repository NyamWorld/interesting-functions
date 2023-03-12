// 입력값에서 공백을 제거하고 각 단어의 첫글자를 대문자로 바꾸는 코드

function jsNaming(str) {
  const words = str.split(" ");
  let newStr = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    newStr += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return newStr;
}

//example: console.log(jsNaming("hello world"));
// >> helloWorld
