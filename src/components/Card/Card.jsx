import React from 'react'
import Button from '../Button/Button'

import './Card.css'

const Card = ({ phrase, changePhrase, changeImage }) => {
    

  return (
    <section className='card'>
        <div className='phrases__card'>
            <p className='card__description'>
                {phrase.phrase}
            </p>
            <p className='card__author'>
                {phrase.author}
            </p>
        </div>
        <div className='card__container__btn'>
            <Button handleClick={changePhrase}
            handleClick2={changeImage}/>
        </div>
    </section>
  )
}

export default Card