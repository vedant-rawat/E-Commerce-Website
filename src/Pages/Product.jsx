import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { BreadCrum } from '../Components/BreadCrum/BreadCrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import alp from '../Components/Assets/all_product'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  // const {all_product} = alp;
  const {productId} = useParams();
  const product = alp.find((e)=>e.id === Number(productId))
  if (!product) {
    return (
      <div className='prdct'>
        <p>Product not found!</p>
      </div>
    );
  }
  return (
    <div className='prdct'>
      <BreadCrum product = {product} />
      <ProductDisplay product = {product} /> 
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
    
  )
}

export default Product

