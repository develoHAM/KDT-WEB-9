
let int = Number(prompt("숫자를 입력하시오"));
let i = 0;
let sum = 0;

while (i <= int) {
    if (i % 2 == 0 || i % 3 == 0) {
        sum += i;
    }
    i++;
}
console.log(sum);




