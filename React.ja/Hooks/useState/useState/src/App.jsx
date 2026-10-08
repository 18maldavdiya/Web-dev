import React from 'react'

function App() {

  const [num,setNum] = useState([10,20,30]);

  const btnClicked =() =>{
    const newNum =[...num]
    newNum.push(56);
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}><Click></Click></button>
    </div>
  )
}

export default App
