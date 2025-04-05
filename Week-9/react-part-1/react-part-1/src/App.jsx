 
// import './App.css'

function App() {
  return (
    <>
    <ToggleMessage />
    <ToggleMessage />
    <ToggleMessage />
    <Post name="Tejas Kadak"/>

<Post name="Shreyas Kadak"/>

    </>

    
  )
}

import React, { useState } from 'react';

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};


function Post({name}){
  return(
  <div>
    hello my name is {name}
  </div>
  );
}
export default App
