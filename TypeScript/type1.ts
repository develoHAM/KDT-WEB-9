// 튜플
// 튜플 타입 선언
let drink: [string, number];

// 튜플 초기화
drink = ['콜라', 2000];

let drink2: [string, number] = ['환타', 1500];

// JavaScript 배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink[0]);
// spread 연산자 사용 가능
console.log([...drink2, '콜라']);

// readonly: 데이터 변경 안되게
let drink3: readonly [string, number] = ['cola', 2000];
// drink3.push('콜라');
console.log(drink3);

/* ---------------------------------------------------------------- */
// 열거형

// enum은 기본적으로 0부터 1식 증가하는 값을 갖는다
enum Auth {
	admin = 100,
	user = 200,
	guest,
}

// enum은 문자열을 지정해 줄 수 있다
enum Delivery {
	pending = 'pending',
	delivery = 'delivery',
	finish = 0,
	hi,
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);
console.log(Delivery.pending);
console.log(Delivery.delivery);
console.log(Delivery.finish);
console.log(Delivery.hi);

/* ---------------------------------------------------------------- */
// any

let a: any = ['1', '2', '3', '4', 1, 2, 3];
a = 13;
console.log(a);
