// 주어진 수가 합성수인지 아닌지를 반환하는 함수

function isComposite(n) {
    if (n === 1) {
      return false;
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return true;
      }
    }
  
    return false;
}

// example: console.log(isComposite(5))
// >> false
