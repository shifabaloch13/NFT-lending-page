import React from 'react'

export default function Hero() {
  return (
    <main className='h-[60vh] sm:h-[88vh] bg-[#090c22] flex flex-col justify-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center w-[80%] mx-auto gap-[2rem]'>
            <div className='mt-[2rem] sm:mt-0'>
      <h1 className='text-[30px] md:text-[40px] lg:text-[50px] sm:leading-[4rem] text-white font-semibold ' >sell your Real Nfts & Earn Money</h1>
          <p className='mt-[1rem] text-white opacity-80 text-[15px] md:text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto incidunt rerum ipsa ipsum necessitatibus, voluptate asperiores unde officia eius molestias aut quibusdam, sunt mollitia voluptas. Quam culpa nemo adipisci!
          Fugit dolorum sequi quis, delectus at iure? Magnam iure in non, deserunt accusantium maiores sint a rem tempora neque beatae. Suscipit asperiores exercitationem iure nihil ratione, blanditiis vitae voluptatum quam.</p>
            <button className='before-ease relative h-12 w-40  overflow-hidden bg-blue-700 text-white font-semibold shadow-2xl before:absolute before:left-0 before:ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:-translate-y-12 before:-rotate-90 before:bg-[#da5959] before:transition-all before:duration-1000 hover:text-white mt:[1.5rem] hover:before:-rotate-180'> <span className='realtive z-10'>Get started</span></button>
            </div>
            <div className='hidden sm:block sm:auto lg-mx-0'>
                <img src='/hero.png' alt='image' width={400}  height={400}  className='object-contain'  />
            </div>
        </div>
    </main>
  )
}
