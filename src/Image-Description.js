import React from 'react'
import "./App.css"

function ImageDescription (props) {

    const { description } = props
  
    return (
      <div>
           <p>{description}</p>
      </div>
    )
  
  }

  export default ImageDescription

