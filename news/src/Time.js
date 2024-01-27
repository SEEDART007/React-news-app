import React, { useState } from 'react'
import App from './App.css'

export default function Time() {
  const[time,setTime]=useState()
    function showTime(){
        let getTime=document.getElementById('2')
        let date=new Date()
        let m=date.getMinutes();
        let s=date.getSeconds();
        let h=date.getHours()
        // getTime.innerHTML=` ${h}:${m}`
        setTime(`${h}:${m}:${s}`)
    }
  return (
    
    <><div><h2  className='time' id='2'>Time➡️{time}</h2></div>
   {
        setInterval(()=>{
          showTime()
      },1000)
    }
    
  
    
    </>
   
  )
}
