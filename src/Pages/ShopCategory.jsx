import React, { useCallback, useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'
import alp from '../Components/Assets/all_product'

export const ShopCategory = (props) => {
  // const all_product = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src = {props.banner} alt = ""/>
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src = {dropdown_icon} alt = ""/>
        </div>
      </div>
      <div className="containerr row m-auto cl">
        {alp.map((item,i)=>{
          if(props.category === item.category) {
            return <div className="col-lg-3 col-md-6 my-3">
              <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
            </div>
            
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory