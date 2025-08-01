import { useState } from 'react'
import './App.css'

function App() {

  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){
 const[bulbOn, setBulbOn] = useState(true);

  return <div>
    <LightBulbState bulbOn={bulbOn}/>
    <ToggleBulb bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function LightBulbState({bulbOn}){
  return <div>
{bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulb({bulbOn, setBulbOn}){
  function toggle(){
    setBulbOn(!bulbOn);
  }

  return <div>
    <button onClick={toggle}>Toggle bulb</button>
  </div>
}

export default App
