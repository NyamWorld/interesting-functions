// 두 수의 최소공배수를 구하는 함수

function leastCommonMultiple(n1, n2) {
    let lcm = 0;
    let max = n1 * n2;
  
    for (let i = n1; i <= max; i += n1) {
      if (i % n2 === 0) {
        lcm = i;
        break;
      }
    }
  
    return lcm;
}
  
// example: console.log(leastCommonMultiple(10,60))
// >> 60
