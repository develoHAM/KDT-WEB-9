function sum1(a: number, b: number): void {
	console.log(a + b);
}
sum1(5, 11);

function sum2(...a: number[]): number {
	return a.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum2(1, 2, 3, 4, 10));
