import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import DisplayImage from "./Display-Image.js";
import ImageDescription from "./Image-Description.js";
import styled from 'styled-components';


const WholeApp = styled.div`
    background-color: black;
`;

const AppTitle = styled.h1`
    color: white;
    font-family: 'Varela Round', sans-serif;
    padding: 20px 20px 20px 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    width: 40%;
    margin: 20px auto 20px auto;
    transition: 0.3s;
    cursor: default;

    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
      transition: 0.3s;
    }
`;

const Container = styled.div`
    padding: 20px;
    border: 4px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: #111111;
`;


function App() {

  const [photo, setPhoto] = useState('Photo goes here')
  const [description, setDescription] = useState('Description goes here')

  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=qex2T0w12U1KXxC11I9EEeN4fmLMRlwEevXphlKV')

      .then( photo => {
          setPhoto(photo.data.hdurl) 
          console.log(photo.data)   
      })

      .catch( err => {
          console.log(`The error was ${err}`)
      })
  }, [])

  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=qex2T0w12U1KXxC11I9EEeN4fmLMRlwEevXphlKV')

      .then( descrip => {
          setDescription(descrip.data.explanation) 
          
      })

      .catch( err => {
          console.log(`The error was ${err}`)
      })
  }, [])


  return (
    <WholeApp className="App">
      <AppTitle>NASA Photo of the Day</AppTitle>
      <Container className="container">
        <DisplayImage photograph={photo}/>
        <ImageDescription description={description} />
      </Container>
    </WholeApp>
  );
}



export default App;
