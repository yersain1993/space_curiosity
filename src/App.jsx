import { useState } from 'react'

import './App.css'

import Card from './components/Card/Card'

import phrases from './assets/data.json'
import images from './assets/img_data.json'


function App() {
   
  const [phraseVisible, setPhraseVisible] = useState(0);
  const [imagen, setImage] = useState(0);

  const random = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const changePhrase = () => {
    const newPhraseVisible = random(0, phrases.length-1);
    setPhraseVisible(newPhraseVisible);
  }

  const imageRandom = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const changeImage = () => {
    const newImage = imageRandom(0, images.length-1);
    const body = document.body;
    setImage(newImage);
    const url = images[imagen].url.toString();
    body.style.backgroundImage = `url(${url})`;
  }

  return (
    <div className="App">
      <h2>INFOGALAX.</h2>
      <Card phrase={phrases[phraseVisible]}
      changePhrase={changePhrase}
      changeImage={changeImage}/>
    </div>
  )
}

export default App
