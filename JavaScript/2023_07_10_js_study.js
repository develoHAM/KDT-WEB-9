// 변수란, 특정 값을 저장하는 공간
// abc = "abcdefg~~~"

// 키워드 변수이름 = 값
// 키워드 : var, let, const

var number = 5; // 변수의 선언과 할당이 동시에
// var number; 변수의 재선언

var number1; // 변수를 선언한다.
number1 = 5; // 변수에 값을 할당한다.
// number1 = 6; 변수에 값을 재할당

let string = "Hello";
// string = "안녕" let 키워드 재할당 가능
// let string; let 키워드는 동일한 변수이름으로 재선언 불가
// var 보다는 let을 권장한다.

const string2 = "World";
// string2 = "BYE";
// console.log(string2);

// function testFunction(){
//     let string = "HELLO"
// }
// function 안에서 선언된 변수는 해당 function 안에서만 사용 가능하다 (scope)

// var let const
// var : 재선언, 재할당
// let : 재선언 불가능, 재할당 가능
// const : 재선언 불가능, 재할당 불가능

let lll;

const aaa = 15; // 값을 변경 할 수 없는 변수 = 상수

/* 변수 기본 규칙 
 * 문자(영어) / 숫자 / $ / _ 만 사용 가능
 * 첫글자는 숫자가 될수 없다, 첫글자 이외 사용 가능
 * 예약어(reserved word)도 사용이 불가하다 (eg. var, let, const, function ...) 
 * 이름은 읽기 쉽도록 센스있게 작성하자
 * 상수는 보통 대문자로 선언한다
*/

// 언어 타입
// 강한 타입 언어 : 타입 검사를 통과하지 못한다면 실행 자체가 안된다.
    // string, int, double 등 타입을 1종류로 명확히 지정해야한다.
// 약한 타입 언어 : 런타임에서 오류를 만나더라도 실행을 막지 않는다.
    // 타입이 여러 종류인 값들이 상관없이 지정된다.

// 데이터 종류(자료형)

// string : 문자형 데이터, 따옴표를 사용한다 (' ' , " " , ` `)
    // let name = 'lily';
    // let hihi = `안녕하세요 ${name} 입니다.`;
    // console.log(`안녕하세요 ${name} 입니다.`);
    // console.log(hihi);
// number : 숫자형 데이터
// boolean : 참, 거짓 데이터 (true / false)
// undefined : 값이 할당되지 않은 상태를 표기
// null : 의도된 빈 데이터
// array : 배열 데이터
     let names = ["홍길동", "성춘향", "짱구"];
     // indexing 인덱싱 : 번호를 매기는 행위
     // index 인덱스 : 0 부터 시작
    console.log( names[0] );
    console.log( names );

    console.log(names.length);
    // 배열의 길이를 출력, 배열의 길이 -> 배열 안에 저장되어 있는 값의 개수

    names.push("짱아"); // 배열의 마지막에 값을 추가하는 기능
    // names = ["홍길동", "성춘향", "짱구", "짱아"];
    console.log('push ', names)

    names.pop(); // 배열의 가장 마지막 값을 삭제
    // names = ["홍길동", "성춘향", "짱구"];
    console.log('pop ', names);

    names.unshift("신형만") // 배열의 제일 앞에 값을 추가하는 기능
    // names = ["신형만", 홍길동", "성춘향", "짱구"];   
    console.log('unshift ', names);

    names.shift(); // 배열의 제일 앞에 값을 삭제
    // names = ["홍길동", "성춘향", "짱구"];
    console.log('shift ', names);

    let index = names.indexOf("짱아"); // 배열 안에 "짱구"가 몇번 인덱스에 위치해 있는지 알려줌.
    // 만약 값이 없을 경우엔, -1이 출력된다
    console.log(index);
    
    let isIncludes = names.includes("짱구"); // 값이 포함되어 있는지 판별하는 기능
    // "짱구"가 배열안에 있는지 없는지 boolean 데이터로 출력한다
    console.log(isIncludes); 

