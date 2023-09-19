import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
// import Caterpillar from "./Practice1"; // 실습 1
// import Test from './Test'; // 실습 2
// import Test2 from './Test2'; // 실습 2
// import Food from './Food' // 실습 3
// import Book from './Practice4' // 실습 4
import Event from './Event'
import EventClass from './EventClass'
import EventHandling from './Practice5'

function App() {

  return (
    <>
      {/* <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <ClassComponent></ClassComponent> */}
      {/* <Caterpillar></Caterpillar> 실습 1*/}
      {/* <Test></Test> 실습 2*/}
      {/* <Test2></Test2> 실습 2*/}
      {/* <ClassComponent name="김대원" age={27} ></ClassComponent>
      <ClassComponent /> */}
      {/* <FunctionComponent myClass={'kdt9'} children={'자식'}>코딩</FunctionComponent>
      <FunctionComponent /> */}
      {/* <Food food="햄버거"></Food> 실습 3*/}
      {/* <Food></Food> 실습 3*/}
      {/* <Book title={'나의 하루는 4시 40분에 시작된다'} author={'김유진'} price={'13,500원'} type={'자기계발서'}></Book> 실습 4*/}
      {/* <Event></Event> */}
      {/* <EventClass /> */}
      <EventHandling message='안녕하세요'></EventHandling>
    </>
  );
}

export default App;
