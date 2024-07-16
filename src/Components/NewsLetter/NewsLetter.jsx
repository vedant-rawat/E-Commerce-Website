import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='container newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our NewsLetter and Stay Updated</p>
        <div className='ip'>
            <input type = "email" placeholder='Your Email ID'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
