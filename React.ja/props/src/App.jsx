import React from 'react'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div className="parent">

      <div className="card">

        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-zbPS5MtftI9dmPU2eF521kF7sMUdAJW8WgkyeUcjw&s" alt=''/>
          <button>Save <Bookmark /></button>
        </div>
        <div className="center"></div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default App
