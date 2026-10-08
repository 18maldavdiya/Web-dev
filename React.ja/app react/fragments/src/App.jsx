import React from 'react'

function App() {

  let foodItems = ['Dal', 'green veg', 'Roti', 'salad', 'Milk']
  return (
    <div>
      <h1>Healthy food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
