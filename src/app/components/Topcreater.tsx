import React from 'react'

export default function Topcreater() {
  return (
      <main className='pb-[3rem] pt-[5rem]   bg-slate-950       '>
        <div className='text-center '>
            <p className='heading-mini'>Creator</p>
            <h1 className='heading-primary'>Top <span className="text-yellow-300">Creator </span> of Today</h1>
        </div>
        <div className='w-[80%] pt-[5rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 gap-[2rem] '>
            <div className='text-center'>
              <div>
                <img src='user1.png' alt='personimage ' width={200} height={200} className='mx-auto'/>
                </div>  
               <h1 className='text-[25px] text-white mt-[1.5rem]'>Tohn Lee</h1>
               <p className='text-yellow-400'>734.5ETH</p>
                 </div>
                 {/* 2 */}
                 <div className='text-center'>
              <div>
                <img src='user2.png' alt='personimage ' width={200} height={200} className='mx-auto'/>
                </div>  
               <h1 className='text-[25px] text-white mt-[1.5rem]'>John Lee</h1>
               <p className='text-yellow-400'>734.5ETH</p>
                 </div>
                 {/* 3 */}
                 <div className='text-center'>
              <div>
                <img src='user3.png' alt='personimage ' width={200} height={200} className='mx-auto'/>
                </div>  
               <h1 className='text-[25px] text-white mt-[1.5rem]'>lohn Lee</h1>
               <p className='text-yellow-400'>734.5ETH</p>
                 </div>
                 {/* 4 */}
                 <div className='text-center'>
              <div>
                <img src='user4.png' alt='personimage ' width={200} height={200} className='mx-auto'/>
                </div>  
               <h1 className='text-[25px] text-white mt-[1.5rem]'>Eohn Lee</h1>
               <p className='text-yellow-400'>734.5ETH</p>
                 </div>
                 {/* 5 */}
                 <div className='text-center'>
              <div>
                <img src='user5.png' alt='personimage ' width={200} height={200} className='mx-auto'/>
                </div>  
               <h1 className='text-[25px] text-white mt-[1.5rem]'>Tohn Lee</h1>
               <p className='text-yellow-400'>734.5ETH</p>
                 </div>
                 {/* 6 */}
                 <div className='text-center'>
              <div>
                <img src='user6.png' alt='personimage ' width={200} height={200} className='mx-auto'/>
                </div>  
               <h1 className='text-[25px] text-white mt-[1.5rem]'>Tohn Lee</h1>
               <p className='text-yellow-400'>734.5ETH</p>
                 </div>
        </div>
      </main>

  )
}