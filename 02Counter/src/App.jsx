import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15);
  // let counter = 15;

  const addValue =()=>{
    // console.log('value added ',Math.random());
    // counter++;
    // console.log('clicked ',counter);
    if(counter<20)
      setCounter(counter+1);
  }
   const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    
   }
  return (
   <>
   <h1>chai aur React</h1>
   <h2>Counter value : {counter}</h2>
   <button onClick={addValue}> Add value</button><br />
   <button onClick={removeValue}>subtract value</button>
   </>
  )
}

export default App
