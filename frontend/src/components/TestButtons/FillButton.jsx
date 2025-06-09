import React from 'react'
import './Buttons.css'

const FillButton = (({legend, onClick}) => {
  return (
    <button className='fillBtn' onClick={onClick} ><p>{legend}</p></button>
  )
})

export default FillButton