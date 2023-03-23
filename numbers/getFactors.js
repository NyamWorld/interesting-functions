// 입력값의 약수를 배열로 나타내는 함수

function getFactors(n) {
    const factors = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
    return factors;
}

// example: console.log(getFactors(10))
// >> [ 1, 2, 5, 10 ]
