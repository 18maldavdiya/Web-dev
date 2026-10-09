import React from 'react'
import Student from './component/Student.jsx'
import './component/Style.css';


function App() {
  return (
    <div className ='container'>
      <Student name ="Hanish"cource="web -dev" marks ={90} image="" />
      <Student name ="Manish"cource="cloud" marks ={37}/>
      <Student name ="Rohi"cource="web -dev" marks ={50}/>
    </div>
  )
}

export default App
