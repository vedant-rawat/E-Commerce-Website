import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotal} = useContext(ShopContext);
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
