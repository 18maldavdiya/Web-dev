import React from 'react'
import FoodItems from './componemt/foodItems.jsx'
import ErrorMessage from './componemt/ErrorMessage.jsx' 
function App() {
  return (
    <div>
      <h1>Healthy food</h1>
      <ErrorMessage/>
      <FoodItems/>
    </div>
  )
}

export default App
