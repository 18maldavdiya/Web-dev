import React from 'react'
function App() {
const submit =()=>{
  console.log('Form Submittes');
}
  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' placeholder='enter your name'></input>
        <input type='text'></input>
        <button>Submit</button>
      </form>
 
    </div>
  )
}
export default App
