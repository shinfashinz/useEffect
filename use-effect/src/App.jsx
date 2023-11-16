import { useState } from 'react'
import './App.css'
import Test from './components/Test/Test';


function App() {
  const [parent, setParent] = useState(0)
  console.log("parent",parent);

  return (
    <>
      <button onClick={()=>{setParent(parent+1)}}>parent{parent}</button>
      <Test/>
    </>
  )
}

export default App
