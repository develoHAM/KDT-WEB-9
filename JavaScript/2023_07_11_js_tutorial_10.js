

let array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i);
}
console.log(array);

//for 문 // 의도에 맞게 연산을 원하는 데이터의 수 를 지정할 수 있다
let forSum = 0;
for (let i = 0; i < array.length; i++) {
    forSum += array[i];
}
console.log(forSum);

//for of 문 // 의도와 상관 없이 배열의 모든 데이터를 연산한다, 대신 간단하다
let forOfSum = 0; 
for (let sum of array) {
    forOfSum += sum;
}
console.log(forOfSum);

//for each 문 // 함수를 기재해야하는 관계로 복잡한 연산에 용이하다
let forEachSum = 0;
array.forEach( (data) => {
    forEachSum += data;
})
console.log(forEachSum);


