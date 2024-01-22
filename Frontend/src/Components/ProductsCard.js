import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import { toast } from 'react-toastify'; 


const ProductsCard = ({product}) => {
  const [cart, setCart] =  useCart()

  console.log('pr', product)
      const{title, image, price } = product
  return (
    <> 
    {/* the styling for this parent tag is great for paddings in between each cards in rows and column */}
      <div className='container flex  px-[1vw]  mt-[3vw]'>
        <div className='flex flex-col items-start justify-start w-[17vw] h-[27vw] border2 gap-[2vw]'>
          <img src={image} alt="" className='w-[14vw] '/>
          
          <div className='w-[14vw] h-[2vw] border2'>{title}</div>
          <p className='border2'>NGN {price}</p>
          <div className='flex'>
            <button className='border2 bg-blue-600 rounded-lg w-[7vw] h-[3vw] '>More Details</button>
            <button className='border2 bg-[gray] rounded-lg w-[8vw] h-[3vw]'
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem("cart", JSON.stringify([...cart, product]))
                toast.success("Item added to cart successfully")
              }}
              >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export default ProductsCard