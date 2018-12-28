/**
 * 자바스크립트에서 함수는 값으로 취급된다.
 * 
 * 1. 리터럴에 의해 생성
 * 2. 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
 * 3. 함수의 인자로 전달 가능
 * 4. 함수의 리턴값으로 리턴 가능
 * 5. 동적으로 프로퍼티를 생성 및 할당 가능
 * 
 * 위 5 가지 기능을 모두 가진 객체를 '일급 객체(First Class)' 라고 부른다.
 * 즉, 자바스크립트에서 함수는 '일급 객체' 이다. 
 */

// 4.2.2.1 변수나 프로퍼티의 값으로 할당 가능.
var obj = {
  hello: function() { return "hello"; },
  olulo: function() { return "olulo"; }
};

console.log(obj.hello());       // "hello"
console.log(obj.olulo());       // "olulo"

// 4.2.2.2 함수 인자로 전달 가능.
var say = function(helloFunc) {
  helloFunc();
};

var helloFunc = function() {
  console.log("Hello olulo.");
};

say(helloFunc);

// 4.2.2.3 리턴값으로 활용 가능.
var foo = function() {
  return function() {
    console.log("Hello olulo.");
  };
};

var bar = foo();
bar();



 

