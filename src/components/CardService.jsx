import React from 'react'
export default function CardService({cardInfo}) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center gap-4 card-service-container'>
        <img className='card-service-icon' src={cardInfo.icon} />
        <span className='fw-bold'>{cardInfo.title}</span>
        <p className='text-secondary fw-bold text-center'>{cardInfo.description}</p>
        <button className='btn btn-outline-secondary fw-semibold'>Learn more</button>
    </div>
  )
}
