/**
 * 4.3.3 내부 함수
 */

function parent() {
  var a = 100;
  var b = 200;

  function child() {
    var b = 300;

    console.log(a);           // 100
    console.log(b);           // 300
  }

  child();
}

parent();                     // parent 함수가 실행됨.
// child();                      // child is not defined.


/**
 * 13 번 라인 
 * 
 * 1. 내부 함수에서는 자신을 둘러싼 부모 함수의 변수에 접근이 가능하다.
 * 2. 변수 b 는 child 함수 내에 선언되어 있으므로 parent 함수의 b 변수가 아닌
 *    child 함수의 변수 b 값이 바로 출력됐다.
 *    이것이 자바스크립트의 `스코프 체이닝` 이고, 5장에서 자세히 설명된다.
 * 3. `4 장에서는 내부 함수는 자신을 둘러싼 외부 함수의 변수에 접근이 가능하다.` 라는 것을 기억하자!
 */

 /**
  * 20 번 라인
  * 
  * 내부 함수는 일반적으로 자신이 정의된 부모함수 내부에서만 호출이 가능하다.
  * 외부에서 호출하려면? 
  */

// function outer() {
//   var say = "I'm inner function.";

//   var inner = function() {
//     console.log(say);
//   };

//   return inner;
// }

// var inner = outer();
// inner();

/**
 * 50 번 라인
 * 
 * outer 함수는 호출이 된 후 실행이 끝나게 된다.
 * 그런데 내부에 선언된 inner 함수는 (43번 라인) 이미 실행이 끝난 outer 함수의 say 변수에
 * 접근이 가능하다. 
 * 이와 같이 이미 실행이 끝난 부모 함수 스코프의 변수를 참조하는 함수를 `클로저(Closure)` 라고 한다.
 * 5장에서 자세히 설명되므로 여기서는 맛보기로 다루어 보았습니다!!
 */
