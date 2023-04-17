import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>

      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
            React (also known as React.js or ReactJS) is a free and open-source front-end
            JavaScript library for building user interfaces based on components.
            It is maintained by Meta (formerly Facebook) and a community of
            developers and companies.
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
            React (also known as React.js or ReactJS) is a free and open-source front-end
            JavaScript library for building user interfaces based on components.
            It is maintained by Meta (formerly Facebook) and a community of
            developers and companies.
          </span>
        </div>
      </div>

      <div className='bottom'>
        <div className='left'>
          <span className='logo'>HVSTORE</span>
          <span className='copyright'>
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className='right'>
          <img src='/img/payment.png' alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Footer