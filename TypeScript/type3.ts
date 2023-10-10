// JavaScript일 경우
// function jsFunc(a, b) {
// 	console.log(a);
// 	console.log(b);
// }

// jsFunc(1, 2);

// TypeScript일 경우
function tsFunc(a: number, b: number, c?: number): number {
	return a + b;
}
console.log(tsFunc(1, 2, 3));
console.log(tsFunc(4, 5));

// 함수 표현식(화살표 함수)
const arrowTsFunc = (a: number, b: number): number => {
	return a + b;
};
// 위 함수의 축약형
const arrowTsFunc2 = (a: number, b: number) => a * b;

// return이 없는 함수
function printFunction(a: string, b: string, c?: string): void {
	console.log(a, b, c);
}

printFunction('123', 'adfa');

/* ----------------------------------------------- */

// never 타입
// never: 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는 무한루프
// 항상 함수 끝에 도달하지 않는 경우

function goingOn(a: number): never {
	while (true) {
		console.log('go');
	}
}
// goingOn(1);
