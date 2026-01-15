import {useState} from 'react';

function App() {
  
  const [counter,setCounter]=useState(0);

  const handleInc=()=>{
    setCounter(counter+1);
  }
  const handleDec=()=>{
    if(counter>0) setCounter(counter-1);
  }


  return (
    <>
      
      <div>count: {counter}</div>

      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Decrease</button>
    </>
  )
}

export default App
