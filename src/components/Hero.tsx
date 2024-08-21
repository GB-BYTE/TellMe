import React from 'react';
import { FaCode } from "react-icons/fa6";
import { GoHash } from "react-icons/go";
import { ReactTyped} from "react-typed";

const Hero = () => {
    return ( 
       <div className=" max-w-[800px] mx-auto h-full sm:my-40 relative  my-24 px-6">
          <div className='text-yellow-400 text-3xl md:text-5xl top-[-50px] lg:ml-[-150px]  absolute opacity-[0.3] xs:hidden '>
                <FaCode />
              </div>
              <div className='text-yellow-400 text-3xl md:text-5xl bottom-0 lg:bottom-[-3px] right-2 lg:right-[-150px] absolute opacity-[0.3] xs:hidden'>
                <GoHash />
              </div>
          <div className="items-center text-center justify-center w-full">
            <h1 className=" md:text-7xl text-4xl sm:text-6xl text-wrap font-bold">Hub for Coding Tips and Insights. 
              {/* <span className="w-4 ml-1 h-4 bg-yellow-300 inline-block rounded-full"></span> */}
            </h1>  
              
            <p className="pt-[1.5rem] md:pt-12 md:text-2xl sm:text-xl text-lg text-gray-500 italic font-bold">
              Discover and share the best tips, tricks, and insights across various languages like
              
              <ReactTyped className='pl-2 md:text-2xl text-xl text-yellow-500 italic font-bold' strings={["HTML","CSS","JAVASCRIPT","TYPESCRIPT","PHP","C#","SQL"]} typeSpeed={120} backSpeed={60} loop />
            </p>
            
            <button className='bg-yellow-400 mt-6 md:mt-10 font-bold w-[150px] md:w-[200px] py-5 text-xl rounded-xl'>Get Started</button>
          </div>
          
          
        </div>
    );
}
 
export default Hero;