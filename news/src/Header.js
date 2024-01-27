import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import Basei from './Base.json'
import Reload from './Reload.json'
import Time from './Time'

export default function Header() {
 const Refresh=()=>{
   window.location.reload()
 
    let id= document.getElementById('id')
      id.innerHTML="Reloading..."
    
 
       

   
 }
    
  return (
    <div className='w-full bg-slate-100 h-14 flex align-middle text-white font-lg'>
        <Lottie className=' ml-2' animationData={Basei}/>
      <h1 className='text-class m-1 font-semibold text-sky-800'>NeuZera</h1>
  <Lottie className='Refresh' animationData={Reload}/>
      
     <button onClick={Refresh} id='id' type='submit'className='Reload text-sky-800'>Click For New Neuz</button>
     
   
      
    </div>
  )
}
