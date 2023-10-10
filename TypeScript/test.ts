const ab: string = 'hi';
console.log(ab);

let b: number = 1;
let c: boolean = false;
let d: object = {
	name: 'martin',
	age: 20,
};

console.log(b, c, d);
// typescript를 쓰는 이유?
// 1) js로 실행 시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
// 2) 정적파일언어 -> 실행하지 않고 코드 상의 에러를 알려줌(실시간 디버깅)

// 배열
let stringArr: string[] = ['1', '2', '3', '4', '5'];
let numberArr: number[] = [1, 2, 3, 4, 5];

// 객체
let person: {
	name: string;
	age: number;
}[];

person = [
	{
		name: 'Daewon',
		age: 26,
	},
];
