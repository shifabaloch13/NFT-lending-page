import React from 'react'


export default function PopularNfts() {
  return (
   <main className='pt-[5rem] pb-[3rem] bg-blue-950   '>
      <div className='text-center'>
        <p className='heading-mini'>popular items</p>
        <h1 className='heading-primary'>Explor <span className='text-yellow-300'>Popular </span> Nfts</h1>
     </div>
     <div className='w-[80%] pt-[5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]'>
         {/* 1 */}
       <div className='p-4 m-2 bg-white rounded-lg bg-opacity-15'>
        <img src='/nft.png.svg'   
          className='mx-auto rounded-lg'/>
     <h1 className='mt-[1.5rem] text-white text-[25px]'>asajal</h1>
     <p className='mt-[0.2rem] text-[15px] text-yellow-300'>warrior</p>
     <div className='mt-[1.5rem] flex items-center justify-between '>
        <button className='px-6 py-13  bg-yellow-300 hover:bg-yellow-500 transition-all duration-150 text-black rounded-lg'>Place a Bid</button>
        <p className='text-[18px] text-white'>3.25ETH</p>
     </div>
      </div>
     {/* 2 */}
      <div className='p-4 m-2 bg-white rounded-lg bg-opacity-15'>
        <img src='/5.png'   
          className='mx-auto rounded-lg' width={800} height={800}  />
     <h1 className='mt-[1.5rem] text-white text-[25px]'>asajal</h1>
     <p className='mt-[0.2rem] text-[15px] text-yellow-300'>warrior</p>
     <div className='mt-[1.5rem] flex items-center justify-between '>
        <button className='px-6 py-13  bg-yellow-300 hover:bg-yellow-500 transition-all duration-150 text-black rounded-lg'>Place a Bid</button>
        <p className='text-[18px] text-white'>4.25ETH</p>
     </div>
      </div>
      {/* 3 */}
      <div className='p-4 m-2 bg-white rounded-lg bg-opacity-15'>
        <img src='/6.png'   
          className='mx-auto rounded-lg' width={4000} height={4000}/>
     <h1 className='mt-[1.5rem] text-white text-[25px]'>asajal</h1>
     <p className='mt-[0.2rem] text-[15px] text-yellow-300'>warrior</p>
     <div className='mt-[1.5rem] flex items-center justify-between '>
        <button className='px-6 py-13  bg-yellow-300 hover:bg-yellow-500 transition-all duration-150 text-black rounded-lg'>Place a Bid</button>
        <p className='text-[18px] text-white'>5.25ETH</p>
     </div>
      </div>
      {/* 4 */}
      <div className='p-4 m-2 bg-white rounded-lg bg-opacity-15'>
        <img src='/last1.png'   
          className='mx-auto rounded-lg'/>
     <h1 className='mt-[1.5rem] text-white text-[25px]'>asajal</h1>
     <p className='mt-[0.2rem] text-[15px] text-yellow-300'>warrior</p>
     <div className='mt-[1.5rem] flex items-center justify-between '>
        <button className='px-6 py-13  bg-yellow-300 hover:bg-yellow-500 transition-all duration-150 text-black rounded-lg'>Place a Bid</button>
        <p className='text-[18px] text-white'>6.25ETH</p>
     </div>
      </div>
       {/* 5 */}
      <div className='p-4 m-2 bg-white rounded-lg bg-opacity-15'>
        <img src='/last2.jpg'   
          className='mx-auto rounded-lg' width={400} height={400} />
     <h1 className='mt-[1.5rem] text-white text-[25px]'>asajal</h1>
     <p className='mt-[0.2rem] text-[15px] text-yellow-300'>warrior</p>
     <div className='mt-[1.5rem] flex items-center justify-between '>
        <button className='px-6 py-13  bg-yellow-300 hover:bg-yellow-500 transition-all duration-150 text-black rounded-lg'>Place a Bid</button>
        <p className='text-[18px] text-white'>7.25ETH</p>
     </div>
      </div>
      {/* 6 */}

      <div className='p-4 m-2 bg-white rounded-lg bg-opacity-15'>
        <img src='/last3.png'   
          className='mx-auto rounded-lg' width={700} height={700}/>
     <h1 className='mt-[1.5rem] text-white text-[25px]'>asajal</h1>
     <p className='mt-[0.2rem] text-[15px] text-yellow-300'>warrior</p>
     <div className='mt-[1.5rem] flex items-center justify-between '>
        <button className='px-6 py-13  bg-yellow-300 hover:bg-yellow-500 transition-all duration-150 text-black rounded-lg'>Place a Bid</button>
        <p className='text-[18px] text-white'>8.25ETH</p>
     </div>
      </div>



    




















      
      
     </div>
   </main>
  )
}
