// 배열에서 중복되는 글을 제거하여 출력하는 코드

const array = ['a','b','c','d','a']

function removeSameWords(arr) {
  return [...new Set(arr)];
}

// example: console.log(removeSameWords(array))
// >> ['a','b','c','d']
