import React from 'react'
import "./App.css"
import styled from 'styled-components'

const PicDescrip = styled.p`
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Varela Round', sans-serif;
    cursor: default;
    transition: 0.3s;
    

    &:hover {
      color: white;
      transition: 0.3s;
      

    }
`


function ImageDescription (props) {

    const { description } = props
  
    return (
      <div>
           <PicDescrip>{description}</PicDescrip>
      </div>
    )
  
  }

  export default ImageDescription

