/**
 * 4.2.1 자바스크립트에서는 함수도 객체다.
 */


function add(x, y) {
  return x + y;
}

console.log(add.result);      // undefinded

add.result = add(3, 2);

console.log(add.result);      // 5
console.log(add);             // page. 81 그림 4-5 참고
