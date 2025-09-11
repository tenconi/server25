import React from 'react'
import './Buttons.css'

const FillButton = (({legend, url}) => {
  return (
    <button className='fillBtn_dark' onClick={() => window.location.href = url} ><p>{legend}</p></button>
  )
})

export default FillButton