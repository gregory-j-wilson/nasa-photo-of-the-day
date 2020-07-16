import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import DisplayImage from "./Display-Image.js";
import ImageDescription from "./Image-Description.js";

function App() {

  const [photo, setPhoto] = useState('Photo goes here')
  const [description, setDescription] = useState('Description goes here')

  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

      .then( photo => {
          setPhoto(photo.data.hdurl) 
          console.log(photo.data)   
      })

      .catch( err => {
          console.log(`The error was ${err}`)
      })
  }, [])

  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

      .then( descrip => {
          setDescription(descrip.data.explanation) 
          
      })

      .catch( err => {
          console.log(`The error was ${err}`)
      })
  }, [])


  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className="container">
        <DisplayImage photograph={photo}/>
        <ImageDescription description={description} />
      </div>
    </div>
  );
}



export default App;
