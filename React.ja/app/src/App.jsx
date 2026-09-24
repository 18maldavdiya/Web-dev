import React from 'react'
import Card from './Components/Card'
import "./Components/index.css";

const App = () => {
  return (
    <div>
      <Card user='Manish' age={22} img="https://plus.unsplash.com/premium_photo-1721372470713-e5b037af1ceb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> 
      <Card user="Hanish" img="https://images.unsplash.com/photo-1783923762572-dab92ea5ae62?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
