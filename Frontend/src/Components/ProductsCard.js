import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import { toast } from 'react-toastify'; 



const ProductsCard = ({product}) => {
  const [cart, setCart] =  useCart()

  console.log('pr', product)
      const{title, image, price } = product
  return (
    <> 
    
      <div className='container  flex mt-[3vw]'>
        <div className='h-[23vw] border '>
            <div className=' flex flex-col  border items-center justify-center w-[14vw] h-[16vw]  gap-[1vw]'>
                <img src={image} alt="" className='h-[13vw]'/>
                <div className=' w-[14vw] h-[2vw] '>
                    <p className='flex items-center justify-center   font-bold text-[1vw] '>{title}</p>
                </div>
            </div>
          <p className=' flex items-center py-[1.2vw] justify-center  text-[0.9vw]'>NGN {price}</p>
          <div className='flex items-center justify-center  gap-[0.4vw]'>
            <button className=' bg-blue-600 rounded-lg w-[6vw] h-[2.6vw] text-[0.9vw] text-[white]'>More Details</button>
            <button  to= "" className=' bg-[gray] rounded-lg w-[7vw] h-[2.6vw] text-[0.9vw] text-[white]'
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