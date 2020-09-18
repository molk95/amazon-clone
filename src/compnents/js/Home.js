import React from 'react'
import Product from '../js/Product'
import AmazonPrime from '../images/AmazonPrime.jpg'
import '../css/Home.css'
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
            <div classNam='home__row' >
                <Product />
            </div>
            <div classNam='home__row' ></div>
            <div classNam='home__row' ></div>
            

        </div>
    )
}

export default Home
