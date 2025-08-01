import { useState } from 'react'
import './App.css'

// custom hook
function useCounter(){
  const [count, setCount] = useState(0);

   function increaseCount(){
    setCount(c => c+ 1);
  }
  return{
    count: count,
    increaseCount: increaseCount
  }
}


function App() {
  const {count, increaseCount} = useCounter();

 

  return (
     <div>
      <button id='btn' onClick={increaseCount}>Increase</button>
      <div>{count}</div>
     </div>
  )
}

export default App
