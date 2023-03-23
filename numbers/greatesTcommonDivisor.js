// 두 수의 최대공약수를 구하는 함수

function greatesTcommonDivisor(n1, n2) {
    let a = Math.abs(n1);
    let b = Math.abs(n2);
    while (b) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
}

// example: console.log(greatesTcommonDivisor(10, 60))
// >> 10
 
