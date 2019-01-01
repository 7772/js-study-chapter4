/**
 * 4.2.3 함수 객체의 기본 프로퍼티
 * 
 */


// * 아래 코드를 복사하셔서 크롬에서 실행해주세요.
// ---------- 복사 -----------
function add(x, y) {
  return x + y;
}

console.dir(add);
console.dir(add.prototype);
// --------------------------

/*

1. ECMA5 스크립트 명세서에는 모든 함수가 length 와 prototype 을 가져야한다고 기술
2. name, caller, arguments, __proto__ 등의 프로퍼티는 ECMA 표준은 아님

3. caller: 자신을 호출한 함수를 나타냄
4. arguments: 함수를 호출할 때 전달된 인자값을 나타냄

5. prototype 과 __proto__ 구분하기

- prototype

  자바스크립트에서는 함수를 생성할 때, 함수 자신과 연결된 prototype 객체를 동시에 생성하며, 
  이 둘은 p.88 그림 4-7 처럼 각각 prototype 과 constructor 라는 프로퍼티로 서로를 참조한다.

  (자세한 내용은 4.5.1 에서)

- __proto__

  자바스크립트에서 객체는 [[Prototype]] 이라는 내부 프로퍼티를 가진다. 크롬 브라우저의 __proto__ 가 
  바로 이 [[Prototype]] 을 나타낸다. 즉, __proto__ == [[Prototype]] 이다.

  함수 역시 자바스크립트 객체 이므로, [[Prototype]] 객체를 가지고 있고, 이를 통해 자신의 부모역할을 하는
  prototype 객체를 가리킨다.

  함수에서는 특별하게, __proto__ 가 가리키는 것은 Function.prototype 객체라고 명명한다. 그리고 이 Function.prototype 또한
  함수 객체이다.

  여기서 궁금증이, 함수는 특별하게 __proto__ 가 Function.prototype 을 가리킨다고 했다. 그런데, Function.prototype 또한 함수라면,
  Function.prototype 의 __proto__ 는 자기 자신을 가리키는가?

  ECMA 명세서에는 예외적으로 Function.prototype 함수 객체의 부모는 자바스크립트의 모든 객체의 조상인 Object.prototype 을 가리킨다고 한다.

  // 그림 functions-prototype.png 참고
*/

// 4.2.3.1 length 프로퍼티
function func0() {}
function func1(x) { return x; }
function func2(x, y) { return x + y; }
function func3(x, y, z) { return x + y + z; }

console.log('func0 length : ', func0.length);
console.log('func1 length : ', func1.length);
console.log('func2 length : ', func2.length);
console.log('func3 length : ', func3.length);

// 4.2.3.2 prototype 프로퍼티

// * 아래 코드를 복사하셔서 크롬에서 실행해주세요.
// ---------- 복사 -----------

function myFunction() { 
  return true; 
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);

// --------------------------

// p.90 그림 4-9 참고
// 이러한 개념은 프로토타입과 프로토타입 체이닝을 이해하는 기본 지식인 만큼
// 충분한 숙지가 필요하다.
