import React, { useDeferredValue, useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import { Item } from '../Item/Item'

export const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data))
  }, [])

  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
          <div className="row">
              {popularProducts.map((item, i)=>{
                  return <div key = {i} className='col-lg-3 col-md-6 col-sm-12'>
                    <Item id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
                  </div>
              })}
          </div>
    </div>
  )
}
