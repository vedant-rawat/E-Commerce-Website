import React from 'react'
import './RelatedProducts.css'
import alp from '../Assets/all_product'
import { Item } from '../Item/Item'

export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related</h1>
        <hr/>
        <div className="row container-fluid my-5">
            {alp.map((item, i)=>{
                if(i === 20 || i === 21 || i === 22 || i === 23)
              return <div className='col-lg-3 col-md-6 my-3'>
                <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
              </div>
            })}
        </div>
    </div>
  )
}
