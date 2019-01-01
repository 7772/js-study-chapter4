/**
 * 4.1.5 함수 호이스팅
 * 
 * function statement vs function expression
 */

// function statement
function foo() {
  console.log('foo');
}                             // function statement 는 세미콜론을 안 붙이는 것이 관례

// function expression
var foo = function() {
  console.log('foo');
};                            // function expression 은 세미콜론을 붙이는 것이 관례


// ----------- 이 두가지 함수 생성방식에서 유의할 점 -----------


// 함수 호이스팅

console.log(add(2, 3));       // 5

function add(x, y) {
  return x + y;
}

console.log(minus(3, 2));     // minus is not a function.

var minus = function(x, y) {
  return x - y;
};

// 위와 같은 호이스팅 문제로, function statement 방식에 의한 함수의 선언은
// 함수를 호출할때는 반드시 먼저 선언되어 있어야 한다는 프로그래밍 규칙을 무시하기 때문에
// 권고하지 않는다는 자바스크립트 구루 더글라스 크락포드의 말씀이 있었다고 전해집니다. p.78
// 따라서 function expression 방식을 사용할 것을 권고한다고 합니다.


