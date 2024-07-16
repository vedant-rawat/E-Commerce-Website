import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box'>Reviews (123)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An ecommerce website serves as a virtual marketplace where buyers and sellers engage in online transactions, revolutionizing the traditional retail experience. These platforms enable consumers to browse and purchase a wide array of products or services from the comfort of their homes. Typically equipped with user-friendly interfaces, secure payment gateways, and efficient search functionalities, ecommerce websites strive to create seamless and convenient shopping experiences. In addition to providing a diverse range of goods, these platforms often feature customer reviews, ratings, and personalized recommendations to enhance the decision-making process for shoppers.</p>
            <p>As technology continues to advance, ecommerce websites are evolving to incorporate innovative features such as augmented reality for virtual product try-ons, predictive analytics for tailored suggestions, and responsive design for optimal user experience across various devices.</p>
        </div>
    </div>
  )
}
