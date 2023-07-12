
let str= 'Happy day~! ';
console.log(str.length);

// 대문자, 소분자로 바꿔주기만 하고 기존 함수에 변환값을 저장하지는 않음
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 매개변수로 문자열을 받아서 몇번째 인덱스인지 숫자 반환, 없으면 -1 반환
console.log(str.indexOf('e'));

// start 부터 end-1 까지 슬라이싱, 빼옴
console.log(str.slice(2,7))

console.log(str.replace('p', 'a'))
console.log(str.replaceAll('p', 'a'))

console.log(str.repeat(2))

console.log(str.trim())

let info = 'Meow/Woof/Moo';
console.log(info.split('/'))

let hello = 'Hello~';
let helloReversed = hello.split('').reverse().join(''); // method chaining
console.log(helloReversed);

