/**
 * 4.3.2 즉시 실행 함수
 * 
 */

// 실행되지 않습니다.
function foo() {
  console.log("This is not executed.");
}

// 함수의 선언과 동시에 실행됩니다.
(function(name) {
  console.log("My name is", name);
})('foo');                            // ('foo') 로 인자를 넘겨줍니다.

// 최초 한번의 실행만을 필요로 하는 초기화 코드 등에 사용됨.
// 또한 함수의 스코프로 모든 코드를 감싸줌으로써, 외부에서 함수 내부의 변수에 접근하는 것을
// 막는 목적으로도 사용됨. p.93

