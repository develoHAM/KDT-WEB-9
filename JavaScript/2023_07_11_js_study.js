
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

let sum = (num1,num2) => { // num1, num2 => 매개변수 (받는 변수)
    let num = num1 + num2;
    let mul = num * 5;
    return mul;
}
let sumMul = sum(3,6); // 3, 6 => 인자 (넘기는 변수)
console.log(sumMul);

// 조건문 : 조건에 따라 다른 코드를 실행시키는 문법

// if (조건) {

// }

let isShow = false;

if (isShow) {
    // 위 조건이 참일 경우 실행, 거짓일 경우 아무것도 실행하지 않는다 (else문 이 없기 때문)
    console.log("보여준다!")
}

if (isShow) {
    // 위 조건이 참일 경우 실행
    console.log("보여준다!")
} else {
    // 위 조건이 거짓일 경우 실행
    console.log("안보여준다!")
}


let number = 5;
if ( number > 10 ) {
    console.log("10보다 크다") // 거짓
} else if ( number < 8 ) { // else if 가장 처음 조건이 거짓일 경우 하나의 조건을 더 추가하여 실행
    console.log("8보다 작다") // 참, 따라서 실행
} else {
    console.log("다 아니야")
}

// if (조건1) { }
// else if(조건2) { } // 조건1이 아니면서 다음조건(조건2)을 만족할 경우
// else if(조건3) { } // 조건2이 아니면서 다음조건(조건3)을 만족할 경우
// else { } // 위 조건들을 모두 만족하지 않을 경우

if (5 === "5") {
    console.log("5 와 '5'는 같은 자료형이다");
} else {
    console.log("5 와 '5'는 다른 자료형이다");
}

// switch 문

let bla = "성춘향";

switch(bla) {
    case "성춘향":
        console.log("여자")
        break; // break 를 걸어줘야 해당하는 case 이후에 다른 case 조건들이 안읽힘
    case "홍길동":
        console.log("남자")
        break;
    default: 
        console.log("잘 모르겠습니다.")
        break;
}

// 3항 연산자 - 실행시킬 코드가 1줄이어야만 사용이 가능
// 조건식 ? 조건이 참인 경우 : 조건이 거짓인 경우; 

let age = 18;
(age >= 20 && age < 100) ? console.log("성인") : console.log("미성년자");

let state = age >= 20 ? 1 : 5;
console.log(state);


// 반복문

// for문
for (let i=0; i<10; i++) { 
    console.log("hi")
}
// let i=0; - 초기값
// i<10; - 조건문
// console.log("hi") - 명령문 (조건문이 참일 경우 실행 후 증감문으로 이동, 거짓일 경우 종료)
// i++ - 증감문
// 종료

let fruits = ["apple", "banana", "orange", "grape", "plum"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let numnum = 5;
let summ = 0;
for (let i = 1; i <= 5; i++) {
    summ += i;
}
console.log(summ);



// for (let i = 1; i <= 5; i--) {
//     console.log(i)
// } // => 잘못된 코드 (무한반복됨)

for (let i = 5; i > 0; i--) {
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(j)
    }
    console.log(i)
}