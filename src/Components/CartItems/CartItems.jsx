import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

import p1_img from '../Assets/product_1.png' 
import p2_img from '../Assets/product_2.png' 
import p3_img from '../Assets/product_3.png' 
import p4_img from '../Assets/product_4.png' 
import p5_img from '../Assets/product_5.png' 
import p6_img from '../Assets/product_6.png' 
import p7_img from '../Assets/product_7.png' 
import p8_img from '../Assets/product_8.png' 
import p9_img from '../Assets/product_9.png' 
import p10_img from '../Assets/product_10.png' 



export const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotal} = useContext(ShopContext);

    // console.log('All Products:', all_product); // Add this line
    // console.log('Cart Items:', cartItems); // Add this line

    
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p className='tp'>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src = {e.image} alt = "" className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img className='removeic' src = {remove_icon} onClick={()=>{removeFromCart(e.id)}} alt = ""/>
                    </div>
                    <hr/>
                </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>SubTotal : </p>
                        <p>${getTotal()}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Shipping Cost</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total : </h3>
                        <h3>${getTotal()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a Promocode, Enter it Here</p>
                <div className="cartitems-promobox">
                    <input type = "text" placeholder='Promocode'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
