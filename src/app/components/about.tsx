// import React from 'react'

// export default function Aboutf() {
//   return (
//    <main className='pt-[5rem] pb-[3rem] bg-blue-950    '>
//     <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap[3rem]'>
//         <div className='md:w-[500px] md:h-[600px] w-[80%]  border-[3px] flex items-center justify-center border-gray-400 rounded-lg  '>
//             <img  src='about.jpg' alt='aboutimage' width={500} height={500} className='rotate-12 rounded-lg'   />
//         </div>
//         <div>
//             <p className='heading-mini'>About us</p>
//             <h1 className='heading-primary'>Discover More collect and sell Rare NFTs</h1>
//             <p className='text-[15px] md:text-[17px]  mt-[1rem] mb-[1rem] text-white opacity-80  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat saepe optio non dolore quas sapiente culpa illo necessitatibus quia distinctio, laudantium assumenda odit quae explicabo, eveniet provident, earum temporibus?
//             Incidunt nemo nam voluptatem illo sint deleniti nesciunt suscipit itaque ducimus inventore ab ea, facilis recusandae eum delectus. Ea aspernatur beatae fugit vitae dignissimos doloribus ullam quisquam ipsa explicabo illo!</p> 
//             <p className='text-[15px] md:text-[17px]  mt-[1rem] mb-[1rem] text-white opacity-80  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat saepe optio non dolore quas sapiente culpa illo necessitatibus quia distinctio, laudantium assumenda odit quae explicabo, eveniet provident, earum temporibus?
//             Incidunt nemo nam voluptatem illo sint deleniti nesciunt suscipit itaque ducimus inventore ab ea, facilis recusandae eum delectus. Ea aspernatur beatae fugit vitae dignissimos doloribus ullam quisquam ipsa explicabo illo!</p>
//             <button className='before-ease relative h-12 w-40  overflow-hidden bg-blue-700 text-white font-semibold shadow-2xl before:absolute before:left-0 before:ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:-translate-y-12 before:-rotate-90 before:bg-[#da5959] before:transition-all before:duration-1000 hover:text-white mt:[1.5rem] hover:before:-rotate-180'> <span className='realtive z-10'>Read more</span></button>
//         </div>
//     </div>
//    </main>
//   )
// }
import React from 'react';

export default function About() {
  return (
    <main className='pt-[5rem] pb-[3rem] bg-blue-950'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]'>
        <div className='md:w-[500px] md:h-[600px] w-[80%] border-[3px] flex items-center justify-center border-gray-400 rounded-lg'>
          <img
            src='/about.jpg'
            alt='aboutimage'
            width={500}
            height={500}
            className='rotate-12 rounded-lg'
          />
        </div>
        <div>
          <p className='text-sm uppercase text-gray-400'>About us</p>
          <h1 className='text-3xl font-bold text-white'>
            Discover More collect and sell Rare NFTs
          </h1>
          <p className='text-[15px] md:text-[17px] mt-[1rem] mb-[1rem] text-white opacity-80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem repellat saepe optio non dolore quas sapiente culpa illo
            necessitatibus quia distinctio, laudantium assumenda odit quae
            explicabo, eveniet provident, earum temporibus? Incidunt nemo nam
            voluptatem illo sint deleniti nesciunt suscipit itaque ducimus
            inventore ab ea facilis recusandae eum delectus. Ea aspernatur
            beatae fugit vitae dignissimos doloribus ullam quisquam ipsa
            explicabo illo!
          </p>
          <button className='relative h-12 w-40 overflow-hidden bg-blue-700 text-white font-semibold shadow-2xl before:absolute before:left-0 before:ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:-translate-y-12 before:-rotate-90 before:bg-[#da5959] before:transition-all before:duration-1000 hover:before:-rotate-180 hover:text-white mt-[1.5rem]'>
            <span className='relative z-10'>Read more</span>
          </button>
        </div>
      </div>
    </main>
  );
}