import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]  = useState(15)
  const addvalue = ()=>{
    if(counter<20){ 
      setCounter(counter+1)
    }
   
  }
  const removevalue = ()=>{
    if(counter>0){ 
    setCounter(counter-1)
  }
}
  return (
    <>
    <h1>Game Zone</h1>
    <h2>Counter Vale</h2>
    <button onClick={addvalue}>
    Add value{counter}</button>
    <br />
    <button onClick={removevalue}>
    Remove Value{counter}</button>
    </>
  )
}

export default App
