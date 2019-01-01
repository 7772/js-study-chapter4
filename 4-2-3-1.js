/**
 * 함수의 생성과 프로토타입
 * 
 * 
 * 
 * 자바스크립트에서 함수는 객체이며, 동시에 함수 입니다.
 * 따라서 객체가 가지는 __proto__ 를 가지고, 함수만이 가지는 prototype 을 가집니다.
 * 평소에, "객체의 프로토타입은 ..." 등의 이야기를 할때 언급되는 '프로토타입' 이라는 명칭은
 * __proto__ 라고 이해하시면 됩니다.
 * 즉, 지금부터 자세히 이야기 할 '프로토타입' 은 함수만이 가지는 '함수의 프로토타입' 을 이야기 합니다. (__proto__ 가 아닙니다.)
 * 
 */

// 1. 함수를 생성합니다.

function Foo() {};

// 2. 함수 Foo 의 생성과 동시에, 메모리 공간 어딘가에 이 함수 Foo 의 prototype 객체가 생성됩니다. 
//    그리고 그 prototype 의 프로퍼티로 constructor 가 생성되고 이것은 Foo 함수를 가리키고 있습니다.
//    (아래 명령어가 자동으로 입력된다고 생각하시면 될 것 같습니다.)

// Foo.prototype = {}; 
// Foo.prototype.constructor = Foo;

// 3. 크롬창에서 확인해주세요.
console.dir(Foo);

// 4. function-prototype-2.png 를 확인해주세요.

// 5. prototype 을 가지고 있는 함수만이 생성자가 될 수 있습니다.
//    (new 키워드를 사용한 새로운 객체생성은 함수만 가능합니다.)

var foo1 = new Foo();
console.log(foo1);

var foo2 = new Foo();
console.log(foo2);

// Bar is not a constructor
// var Bar = {};
// var bar = new Bar();
// console.log(bar);


// 6. 이제 새롭게 함수를 정의하고 prototype 을 추가해보겠습니다.

// 크롬창에 아래 코드를 복사한 후 실행해주세요.

function Company() {};
Company.prototype.members = [];

var olulo = new Company();

var hyundo = "hyundo";
var foo = "foo";

olulo.members.push(hyundo, foo);

console.dir(olulo);
console.log(olulo.members);


// function-prototype-3.png 를 확인해주세요.









