// function App() {
//   return (
//     <>
//     <ToggleMessage />
//     <ToggleMessage />
//     <ToggleMessage />
//     </>
//   )
// }

import { useEffect, useState } from "react"

// import React, { useState } from 'react';

// const ToggleMessage = () => {
//     const [notificationCount, setnotificationCount] = useState(0);

//     function toggle(){
//       setnotificationCount(notificationCount + 1);
//     }
    

//     return (
//         <div>
//             <button onClick={toggle}>
//                 Toggle Message
//             </button>
//             <p>notification count : {notificationCount}</p>
//             {/* {isVisible && <p>This message is conditionally rendered!</p>} */}
//         </div>
//     );
// };


function App(){
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(currentValue => currentValue + 1);
  }


  useEffect(function() {
    console.log("above setinterval");
    setInterval(increaseCount, 1000);
  },[])


  return <div>
{count}
   </div>
  
}

export default App
