import React from 'react'
import './Buttons.css'

const LineButton = ( ({legend, onClick}) => {
  return (
    <button className='lineBtn' onClick={onClick}><p>{legend}</p></button>
  )
})

export default LineButton