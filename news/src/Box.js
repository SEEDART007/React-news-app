import React from 'react'
import PropTypes from 'prop-types'


export default function Box(props) {
  const img='./download (1).png'
 
  return (
<>
<div className="card  mb-3 hover:scale-95" style={{"maxWidth": 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.imgy} alt={img} className="img-fluid bg-cover  rounded-t-sm" />
    </div>
    <div className="col-md-8 ">
      <div  className="card-body">
        <h5 key={props.name}  className="card-title line-clamp-3">{props.head}</h5>
        <p  className="card-text line-clamp-3" >{props.desc}</p>
        <p className="card-text line-clamp-3"><small className="text-muted">{props.date}</small></p>
        <a  href={props.link} type="button" className="btn  text-dark text-2xl active:bg-gray-600">Read-More</a>
      </div>
    </div>
  </div>
  
</div></>
  )
}
