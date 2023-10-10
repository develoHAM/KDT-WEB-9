var ab = 'hi';
console.log(ab);
var b = 1;
var c = false;
var d = {
	name: 'martin',
	age: 20,
};
console.log(b, c, d);
// typescript를 쓰는 이유?
// 1) js로 실행 시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
// 2) 정적파일언어 -> 실행하지 않고 코드 상의 에러를 알려줌(실시간 디버깅)
// 배열
var stringArr = ['1', '2', '3', '4', '5'];
var numberArr = [1, 2, 3, 4, 5];
// 객체
var Person;
Person = [
	{
		name: 'Daewon',
		age: 26,
	},
];
