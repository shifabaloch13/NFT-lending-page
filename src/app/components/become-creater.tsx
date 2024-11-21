import React from 'react'
import { IoIosRocket } from "react-icons/io";
import { FaChartPie } from "react-icons/fa6";
import { MdPermIdentity } from "react-icons/md";
import { PiPresentationChartDuotone } from "react-icons/pi";


export default function Becomecreater() {
  return (
    <main className='pb-[3rem] pt-[5rem] bg-blue-900    '>
        <div className='text-center'>
            <p className='heading-mini'>Become a creator</p>
            <h1 className='heading-primary'>create and<span className='text-yellow-300'> sell </span>your Nfts</h1>
        </div>
        <div className='w-[80%] mx-auto mt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]'>
             <div className='bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 rounded-md p-4'>
             <IoIosRocket className='w-[4rem] h-[4rem] mt[1.4rem]  text-yellow-300    ' />
             <h1 className='mt:[1rem] text-[20px] text-white '>Sell your wallet</h1>
           <p className='mt[1rem] text-[15px] text-white opacity-85'>Lorem ipsum dolor sit amet consectetur adipisicing! </p>
         <button className='mt-[r1rem] text-[17px] hover:text-yellow-300 text-white underline         '>Read more</button>
             </div>
             <div className='bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 rounded-md p-4'>
             <FaChartPie className='w-[4rem] h-[4rem] mt[1.4rem]  text-green-300    ' />
             <h1 className='mt:[1rem] text-[20px] text-white '>Sell your wallet</h1>
           <p className='mt[1rem] text-[15px] text-white opacity-85'>Lorem ipsum dolor sit amet consectetur adipisicing! </p>
         <button className='mt-[r1rem] text-[17px] hover:text-yellow-300 text-white underline         '>Read more</button>
             </div>
             <div className='bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 rounded-md p-4'>
             <MdPermIdentity className='w-[4rem] h-[4rem] mt[1.4rem]  text-orange-300    ' />
             <h1 className='mt:[1rem] text-[20px] text-white '>Sell your wallet</h1>
           <p className='mt[1rem] text-[15px] text-white opacity-85'>Lorem ipsum dolor sit amet consectetur adipisicing! </p>
         <button className='mt-[r1rem] text-[17px] hover:text-yellow-300 text-white underline         '>Read more</button>
             </div>
             <div className='bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 rounded-md p-4'>
             <PiPresentationChartDuotone  className='w-[4rem] h-[4rem] mt[1.4rem]  text-yellow-300    ' />
             <h1 className='mt:[1rem] text-[20px] text-white '>Sell your wallet</h1>
           <p className='mt[1rem] text-[15px] text-white opacity-85'>Lorem ipsum dolor sit amet consectetur adipisicing! </p>
         <button className='mt-[r1rem] text-[17px] hover:text-yellow-300 text-white underline'>Read more</button>
             </div>



        </div>

    </main>
  
  )

}
