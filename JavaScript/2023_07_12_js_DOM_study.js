

// Date 객체
console.log('---Date 객체---')
let now = new Date(); // 2023-07-12일 (수) 기준
let expired = new Date('2023-06-07')
console.log(now);
console.log(expired);
console.log(now.getFullYear())
console.log(now.getMonth()+1) // 주의 getMonth는 실제 월-1 됨


console.log(now.getDate()) // 12
console.log(now.getDay()) // 3 => 요일을 숫자로, 일요일은 0으로 반환됨
console.log(now.getTime())
console.log(expired.getTime())
console.log(now.getTime() >= expired.getTime()) // 시간 비교 방법

let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
console.log(`${year}-${month >= 10 ? month : "0"+month}-${date >= 10 ? date : "0"+date}`)

// Math 객체 
console.log('---Math 객체---')

console.log(Math.PI)
console.log(Math.E)
console.log(Math.min(2,5,8))
console.log(Math.max(2,5,8))
console.log(Math.random())
console.log(Math.round(7.9), Math.round(7.2))
console.log(Math.floor(7.9), Math.floor(7.2))
console.log(Math.ceil(7.9), Math.ceil(7.2))

console.log(Math.floor(Math.random() * (56 - 50) + 50)) // 56 과 50 사이의 램덤 숫자 생성 후 정수로 내림(floor)

// DOM (Document Object Model)
console.log('---DOM---')
console.log('---------')
console.log('---------')
