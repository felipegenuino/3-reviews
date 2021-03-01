import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

import people from './data';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    // se o número for maior que o index do array, pula para o zero
    if (number > people.length - 1) {
      return 0;
    }
    //se for numero negativo pula para a ultima posição do array
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    })
  }

  const randonPerson = () => {
    let randonNumber = Math.floor(Math.random() * (people.length))
    if (randonNumber === index) {
      randonNumber = index + 1;
    }
    setIndex(checkNumber(randonNumber))
    console.log(randonNumber)

  }



  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img" alt={text} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author"> {index} {name} </h4>


      <p className="job"> {job} </p>
      <p className="info"> {text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randonPerson}>
        surprise me
        </button>
    </article>
  )
};

export default Review;
