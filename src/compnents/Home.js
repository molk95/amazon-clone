import React from 'react'
import '../compnents/Home.css'
import AmazonPrime from './images/AmazonPrime.jpg'
function Home() {
    return (
        <div className="home">
            <div className='home__container'>
              <img
              className='home__image'
              src={AmazonPrime }
              alt='AmazonPrime'
              />
            </div>

        </div>
    )
}

export default Home
