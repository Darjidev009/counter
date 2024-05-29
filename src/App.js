import './App.css';
import {useState} from 'react'
 
function App() {
  
  let [counter, setCounter] = useState(0)

// let counter = 0

const addValue = () => {
  // counter = counter + 1
  setCounter( counter + 1 )
}
const removeValue = () => {
  setCounter( counter - 1)
}
  return (
    <div className='App' >
      <h1>Counter Create By Dev  </h1>
      <h2>Counter Value {counter}</h2>

      <button className='bg' onClick={addValue}>Add Value</button>
      <button className='bg'  onClick={removeValue}> Remove Value </button>
    </div>
  );
}

export default App;
