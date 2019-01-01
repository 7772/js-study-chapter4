/**
 * 4.3.4 함수를 리턴하는 함수
 */

var self = function() {
  console.log('a');
  return function() {
    console.log('b');
  }
};

self = self();
self();

/**
 * 12 번 라인
 * 
 * self() 의 호출로 먼저 6번 라인이 출력됩니다.
 * 그리고 리턴 값으로 또다른 함수가 정의되었고, 그 값은 self 변수로 다시 담겨집니다.
 * 13 번 라인에서 그 리턴값으로 저장된 b 가 출력됩니다.
 */


/**
 * 즉시실행함수 + 클로져 + 함수를 리턴하는 함수
 */
// (function foo(idx) {
//   var start = 0;

//   var count = function(lastIdx) {
//     for (let i = start; i < lastIdx; i++) {
//       console.log(i);
//     }
//   };

//   return count(idx);
// })(10);

/**
 * 추가
 * 
 * Higher Order Function - 함수를 인자로 받고, 함수를 리턴하는 함수.
 * 
 * Wiki - https://en.wikipedia.org/wiki/Higher-order_function
 */

var twice = function(f, v) {
  return f(f(v));
};

var f = function(v) {
  return v + 3;
};

console.log(twice(f, 7));

 /**
  * 프로토타입 + 콜백함수 + Higher Order Function
  */
Array.prototype.oluloFunc = function(members, cb) {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < members.length; j++) {
      if (this[i] === members[j]) {
        cb(this[i]);
        break;
      }
    }
  }
};

var olulo = [
  'young',
  'jin',
  'soo',
  'sin',
  'hyung',
  'yong',
  'ri',
  'hyun',
  'yang',
  'sh',
  'choi'
];

var arr = ['baz', 'hyun', 'foo', 'bar', 'choi'];

arr.oluloFunc(olulo, function(member) {
  alert('Hello!' + member);
});

// 크롬에서 60 ~ 92 라인 까지 복사하시고, 아래 결과물을 확인해주세요.
console.dir(arr);
