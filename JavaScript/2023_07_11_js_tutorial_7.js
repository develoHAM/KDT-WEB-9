
let number = Number(prompt("입력한 숫자 까지 13의 배수면서 홀수인 숫자를 찾아 봅시다~"))

for ( i = 0; i <= number; i++ ) {
    if (i % 13 == 0 && i % 2 == 1) {
        console.log(i);
    } 
}