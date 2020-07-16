import React from 'react'
import "./App.css"

function DisplayImage (props) {

    const { photograph } = props
  
    return (
      <div className="photo-of-the-day">
           <img src={photograph} alt='website logo' className="nasa-img" />
      </div>
    )
  
  }

  export default DisplayImage

