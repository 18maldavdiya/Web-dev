import React from 'react'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div className="parent">

      <div className="card">

        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-zbPS5MtftI9dmPU2eF521kF7sMUdAJW8WgkyeUcjw&s" alt=''/>
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days to aga</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>full time</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            
              <h3>$120/h</h3>
              <p>Mumbai,India</p>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
