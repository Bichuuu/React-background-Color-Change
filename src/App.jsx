import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [bubblecolor, setbubbleColor] = useState('')

  const generatebubble=()=>{
    const bubbles = []

    for(let i = 0; i < 200; i++){
      bubbles.push({
        size: `${Math.floor(Math.random() * 100) + 30}px`,
        left: `${Math.floor(Math.random() * 100)}vw`,
        top: `${Math.floor(Math.random() * 100)}vh`,
        delay: `${Math.random() * 2}s`
      })
    }
    return bubbles
  }

    const bubbles = (generatebubble());

   const colors = [' SkyBlue', 'Red', ' Orange', 'Green', 'Purple', 'yellow', 'pink'];

    return (

      <>
      
 
      <div className="centerbox">
        {colors.map((color, index) => (
          <button key={index} className="btn btn-dark m-2" style={{ backgroundColor: color, color:'black',}} onClick={() => setbubbleColor(color)} >
            {color}
          </button>
        ))}
      </div>

      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="bubble"
          style={{
            backgroundColor: bubblecolor,
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
            animationDelay: bubble.delay
          }}
        ></div>
      ))}
    
  
    </>
  );
}

export default App
