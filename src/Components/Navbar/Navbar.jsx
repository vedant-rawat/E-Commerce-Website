// rafc enter
import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalItems} = useContext(ShopContext);
  return (
    // <div class = 'navbar'>
    //     <div className="nav-logo">
    //         <img src = {logo} alt = ""/>
    //         <p>SHOPPER</p>
    //     </div>
    //     <ul className="nav_menu">
    //         <li onClick={()=>{setMenu("shop")}}><Link to = '/' style={{textDecoration: 'none'}}>Shop</Link>{menu === 'shop'?<hr/>:<></>}</li>
    //         <li onClick={()=>{setMenu("men")}}><Link to = '/mens' style={{textDecoration: 'none'}}>Men</Link>{menu === 'men'?<hr/>:<></>}</li>
    //         <li onClick={()=>{setMenu("women")}}><Link to = '/womens' style={{textDecoration: 'none'}}>Women</Link>{menu === 'women'?<hr/>:<></>}</li>
    //         <li onClick={()=>{setMenu("kids")}}><Link to = '/kids' style={{textDecoration: 'none'}}>Kids</Link>{menu === 'kids'?<hr/>:<></>}</li>
    //     </ul>
    //     <div className="nav-login-cart">
    //         <Link to = '/login'><button>Login</button></Link>
    //         <Link to = '/cart'><img src = {cart_icon} alt = ""/></Link>
    //         <div className="nav-cart-count">0</div>
    //     </div>
    // </div>


    <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="nav-logo">
                <img src = {logo} alt = ""/>
                <p>SHOPPER</p>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                    <a onClick={()=>{setMenu("shop")}} className="nav-link active" aria-current="page" href="/" >Home </a>
                </li>
                <li className="nav-item">
                    <a onClick={()=>{setMenu("men")}} className="nav-link active" aria-current="page" href="/mens" >Men </a>
                </li>
                <li className="nav-item">
                    <a onClick={()=>{setMenu("women")}} className="nav-link active" aria-current="page" href="/womens" >Women </a>
                </li>
                <li className="nav-item">
                    <a onClick={()=>{setMenu("kids")}} className="nav-link active" aria-current="page" href="/kids" >Kids </a>
                </li>                
            </ul>

            <form className="d-flex" role="search">
                <div className="nav-login-cart">
                    {localStorage.getItem('auth-token') ? 
                    <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button> : 
                    <Link to = '/login'><button type="button" className="btn btn-warning bt" style={{"fontSize": "18px"}}>Log In</button></Link>}
                    
                    <Link to = '/cart'><img src = {cart_icon} alt = ""/></Link>
                    <div className="nav-cart-count">{getTotalItems()}</div>
                </div>
            </form>
            </div>
        </div>
    </nav>
    </div>  
    
  )
}



