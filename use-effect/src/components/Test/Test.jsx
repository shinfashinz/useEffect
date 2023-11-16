import {useState, memo} from 'react'



function Test() {
  const [Child, setChild] = useState(0)
  console.log("Child",Child);

  return (
    <>
      <button onClick={()=>{setChild(Child+1)}}>Child{Child}</button>
    
    </>
  )
}

export default memo(Test)
