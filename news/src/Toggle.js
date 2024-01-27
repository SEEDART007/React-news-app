import React from 'react'

export default function Toggle() {
   function toggleMode(){
          myStyle={
            backgroundColor:'black',
            color:'white'
          }
   }
  return (
    <div>
      <button style={myStyle} onClick={toggleMode}>ToggleModes</button>
    </div>
  )
}
