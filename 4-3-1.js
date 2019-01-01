/**
 * 4.3.1 콜백함수
 */

var foo = function(isTrue, callback) {
  if (isTrue) {
    callback("Hello olulo.");
  } else {
    console.log("isTrue is false.");
  }
};

var saySomething = function(something) {
  console.log(something);
};

foo(true, saySomething);
foo(false, saySomething);