import logo from './logo.svg';
import './App.css';

function App() {
  const name = '초코';
  let animal = '강아지';
  let source = 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSgU4nPfMA2Ss-LB1u-cfjkd3JCEsyeyaLqufqktH0cl4DfeyvjoGMubCIvYW5OwwpB9iMBWMNAvl3qiwA'
  const size = {
    width: '300px'
  }
  const title = '리액트 실습'

  // 실습 map, filter
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ]
  const filter = users.filter((user) => {
    return user.vip
  })
  const map = filter.map((user) => {
    console.log('-', user.name)
  })

  const result = 1 + 1 == 2 && false;
  console.log(result)

  const isLogin = true;

  return (
    <>
      {isLogin && (
        <>
          <h1>실습 1번</h1>
          <div>이것은 div입니다.
            <h3>이것은 div안에 있는 h3태그 입니다.</h3>
          </div>
          <div>
            {3 + 5 == 5 ? <p>정답입니다</p> : <p>오답입니다</p>}
          </div>

          <h1>실습 2번</h1>
          <h2>
            제 반려동물의 이름은 <u>{name}</u>입니다.
            <br />
            <u>{name}</u>은 <u>{animal}</u>입니다.
          </h2>
          <img src={source} alt={name} style={size} />

          <h1>실습 3번</h1>
          <div className='test'>{title}</div>
          <div className='input'>
            아이디: <input />
            <br />
            <br />
            비밀번호: <input />
          </div>

          <h1>실습 4번</h1>
          <div className='container'>
            <div className='red'></div>
            <div className='orange'></div>
            <div className='yellow'></div>
            <div className='green'></div>
            <div className='blue'></div>
            <div className='navy'></div>
            <div className='purple'></div>
          </div>

          <ul>
            {filter.map((user, index) => {
              return (
                <li key={index}>{user.name}</li>
              )
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
