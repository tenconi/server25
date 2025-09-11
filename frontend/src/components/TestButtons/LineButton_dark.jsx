import React from 'react'
import './Buttons.css'

const LineButton = ( ({legend, url}) => {
  return (
    <button className='lineBtn_dark' onClick={() => window.location.href = url} ><p>{legend}</p></button>
  )
})

export default LineButton