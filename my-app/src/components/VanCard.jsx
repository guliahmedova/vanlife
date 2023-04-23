import React from 'react'

const VanCard = (props) => {
  return (
    <div className='card'>
      <img src={props.imageUrl} alt="" />
      <div className="title">
        <h1>{props.name}</h1>
        <h2><span>${props.price}</span> <span>/day</span></h2>
      </div>
      <div className='van-btn'>{props.type}</div>
    </div>
  )
}

export default VanCard