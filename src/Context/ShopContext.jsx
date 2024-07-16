import React, { createContext, useState, useEffect } from "react";
// import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext([]);

const getDefaultCart = ()=>{
    let cart = {}
    for(let index = 0; index<300+1; index++)
    {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    // const [cartItems, setCartItems] = useState(getDefaultCart());

    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : getDefaultCart();
    });

    const [all_product, setAll_Product] = useState([]);

    console.log(all_product);
    console.log(cartItems);


    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: "",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
        else{
            setCartItems(getDefaultCart())
        }
    }, [])      

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'itemId': itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    } 

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'itemId': itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    }

    const getTotal = ()=>{
        let totalAmt = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmt += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmt;
    }

    const getTotalItems = ()=>{
        let total = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                total += cartItems[item]
            }
        }
        return total;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotal, getTotalItems};   
    console.log(cartItems)

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;