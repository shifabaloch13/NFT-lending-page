import React from 'react'
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Becomecreater  from './components/become-creater';
import  PopularNfts from './components/popularNfts';
import Topcreater from './components/Topcreater';
import Footer from './components/footer';
  
 export  default function page() {
  return (
    
    <div className='overflow-x-hidden'> 
      <Header/>
      <Hero/>
      <About/>
      <Becomecreater/>
 <PopularNfts/>
       <Topcreater/>
       <Footer/>
      </div>
    
  )
}
