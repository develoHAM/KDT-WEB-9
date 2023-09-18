import logo from './logo.svg';
import './App.css';

function App() {
  // map 함수
  const lists = ['k', 'd', 't', 'w', 'e', 'b']
  // filter 함수
  const animals = ['dog', 'cat', 'rabbit']
  const newAnimals = animals.filter((animal) => {
    return animal.includes('a')
  })
  // console.log(newAnimals)
  // 단축 평가
  // %% 연산자
  const result = false && 'Hello';
  console.log(result)
  // || 연산자
  const defaultValue = 1000
  const price = 1500
  const dbPrice = price || defaultValue
  console.log(dbPrice)
  
  return (
    <>
      {lists.map((value, index) => {
        return <div key={index}><p>Hello {value}</p></div>
      })}
    </>
  );
}

export default App;
