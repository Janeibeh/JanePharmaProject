import React from 'react'

const Cart = () => {
  // const{title, image, price, address } = product
  return (
    <>
        <div class="h-14 bg-gradient-to-r from-red-50 to-teal-50"></div>
        <div className='flex flex-col w-[100vw] items-center justify-center'>
            <div className='flex font-bold py-[1vw] text-[1.07vw]'>    You have {} items in your cart... </div> 
            <div className='flex container'>
                <div className='flex p-[1.7vw] w-[60vw] h-[29vw] gap-[1.3vw] border rounded-lg'>
                 
                    <img src="" alt="" className='w-[18vw] h-[25vw] ' />
                    <div className=' h-[23vw]  ' >
                      <div className='flex-col flex gap-[1.2vw] items-center justify-center'>
                        <div className='border2 w-[5vw] h-[2vw]'></div>
                        <div className='border2 w-[5vw] h-[2vw]'>{}</div>
                        <div className=' font-bold  text-[1.1vw]'>Price: NGN{}</div>
                        <button className='border2 mt-[1vw] w-[6.5vw] h-[2.7vw] bg-[red] text-[white] text-[0.9vw] rounded-lg'> Remove</button>
                      </div>
                    </div>
               
                </div>
                <div className='w-[28vw] h-[vw] flex items-center justify-start flex-col gap-[0.7vw] '>
                  <div className='border-b w-[28vw] flex items-center justify-center flex-col p-[3vw] gap-[1vw]'>
                      <div className='font-bold  text-[1.1vw]'> Cart Summary</div>
                      <div className='font-thin  text-[0.85vw]'> Total | Checkout | Payment</div>
                  </div>
                  <div className=' font-bold  text-[1.07vw]'>Total : NGN{}</div>
                  <div className='font-bold  text-[1.07vw]'>Current Address </div>
                  <div className='border2  w-[21vw] h-[5vw]'>
                    <p className='font-bold  text-[1vw]'>{}</p>
                  </div>
                  <button className=' w-[10vw] h-[2.7vw] bg-[blue] text-[white] text-[0.9vw] rounded-lg'> Update Address</button>
                  <button className=' w-[16vw] h-[2.7vw] bg-[green] text-[white] text-[0.9vw] rounded-lg'> Payment</button>
                </div>
                
            </div>
            
        </div> 
    </>


    
  )
}

export default Cart