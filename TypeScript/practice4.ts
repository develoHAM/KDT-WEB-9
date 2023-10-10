function arrElement<T>(arr: T[], idx: number): T | boolean {
	if (idx > arr.length - 1) {
		return false;
	}
	return arr[idx];
}
console.log(arrElement<string>(['a'], 1));
console.log(arrElement<number>([3, 4, 5, 6, 7, 4], 3));
