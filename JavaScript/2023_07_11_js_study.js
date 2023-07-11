
// 함수

// 함수 선언문
function sayHello() {
    console.log("Hello");
}
    // 함수를 만든다고 해서 함수의 내용이 실행되지 않는다
    // 함수이름과 ()를 적어서 호출해야 실행된다
    // 함수 선언문은 선언 하기전에도 호출이 가능하다 (hoisting)
sayHello();

// 함수 표현식
let sayBye = function() {
    console.log("Bye");
}
    // 함수 표현식은 선언 이후에만 호출이 가능하다
sayBye();

// 화살표 함수 (arrow function)
let sayWow = () => {
    console.log("Wow");
}
    // 화살표 함수도 함수 선언 이후에만 호출이 가능하다
sayWow();

// 매개변수(parameter) & 반환값 유무 (함수 형태)
    // 매개 변수는 함수 외부에서 사용한 변수, 값 등을 함수 내부로 전달하고 싶을때 사용
    // 반환값은 함수 내부에서 생성된 변수, 값 등을 함수 외부로 전달하고 싶을때 사용 (return 값)

// 1. 매개변수가 없고, 반환값도 없음
function aaa() {
    console.log("aaa");
}
aaa();

// 2. 매개변수가 없고, 반환값이 있음
function bbb() {
    return "bbb"
}
bbb(); // => "bbb"
console.log(bbb());

// 3. 매개변수가 있고, 반환값이 없음
let number1 = 5;
let number2 = 3;
function ccc( num1, num2 ) { //num1, num2 : 매개변수
    console.log(num1 + num2);
}
ccc(number1, "Hello");

// 4. 매개변수가 있고, 반환값도 있음 (매개변수 1개, 반환값 1개)
function ddd( num1 ) {
    return num1 + 5;
}
ddd(5); // => 10
let num = ddd(5);
console.log(num);

let sum = (num1,num2) => {
    let num = num1 + num2;
    let mul = num * 5;
    return mul;
}
let sumMul = sum(3,6);
console.log(sumMul);

