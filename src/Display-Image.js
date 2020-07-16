import React from 'react'
import "./App.css"
import styled from 'styled-components'

const Image = styled.img`
    border-radius: 20px;
    transition: 0.5s;
    border: 3px solid black;

    &:hover {
    filter: brightness(170%);
    transition: 0.5s;
    }
`;

function DisplayImage (props) {

    const { photograph } = props
  
    return (
      <div className="photo-of-the-day">
           <Image src={photograph} alt='website logo' className="nasa-img" />
      </div>
    )
  
  }

  export default DisplayImage

