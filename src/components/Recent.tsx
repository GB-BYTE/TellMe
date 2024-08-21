import code1 from '../assets/code1.jpg'

const Recent = () => {
    return ( 
        <div className="max-w-[1540px] mx-auto py-20 px-6 items-center">
           <h3 className="mb-10 font-bold text-3xl italic ">#Trending Posts</h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

               <div className='lg:col-span-2  pr-4 md:border-r border-gray-300'>
                     <div className=" border-black lg:flex gap-5 mb-6  rounded-lg  overflow-hidden">
                        <img className='lg:w-[300px] lg:h-[200px] w-full lg:-[300px]' src={code1} alt="laatest blog" />
                        <div className='mt-1 max-h-[200px] overflow-hidden'>
                        <span className="text-gray-500 font-bold">Oliver Twist. Aug 23, 2024</span>
                        <h2 className="font-bold mt-1 mb-1 text-xl w-full">Why you should learn ASP.NET As a Beginner Developer</h2>
                        <p className="mt-2 line-clamp-2">
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in delectus vel! Sit nihil neque, ipsum asperiores libero provident expedita reiciendis fugit aliquam id odio nisi dolor necessitatibus aliquid animi...
                        </p>
                        </div>
                     </div>

                     <div className="  border-black lg:flex gap-5 mb-6  rounded-lg  overflow-hidden">
                        <img className='lg:w-[300px] lg:h-[200px] w-full lg:-[300px]' src={code1} alt="latest blog" />

                        <div className='mt-1 max-h-[200px] overflow-hidden'>
                        <span className="text-gray-500 font-bold">Oliver Twist. Aug 23, 2024</span>
                        <h2 className="font-bold mt-1 mb-1 text-xl w-full">Why you should learn ASP.NET As a Beginner Developer</h2>
                        <p className="mt-2 line-clamp-2">
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in delectus vel! Sit nihil neque, ipsum asperiores libero provident expedita reiciendis fugit aliquam id odio nisi dolor necessitatibus aliquid animi...
                        </p>
                        </div>
                     </div>

                     <div className="border-black lg:flex gap-5 rounded-lg  overflow-hidden">
                        <img className='lg:w-[300px] lg:h-[200px] w-full lg:-[300px]' src={code1} alt="latest blog" />

                        <div className='mt-1 max-h-[200px] overflow-hidden'>
                        <span className="text-gray-500 font-bold">Oliver Twist. Aug 23, 2024</span>
                        <h2 className="font-bold mt-1 mb-1 text-xl w-full">Why you should learn ASP.NET As a Beginner Developer</h2>
                        <p className="mt-2 line-clamp-2">
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in delectus vel! Sit nihil neque, ipsum asperiores libero provident expedita reiciendis fugit aliquam id odio nisi dolor necessitatibus aliquid animi...
                        </p>
                        </div>
                     </div>
               </div>

               <div className='col-span-1 px-1'>
                  <h1 className='font-bold text-2xl'>Categories of Interest</h1>
                  <div>
                     <ul className='uppercase  mt-5 flex flex-wrap gap-5'>
                        <li className='bg-yellow-500 cursor-pointer px-3 py-3 text-black font-bold rounded-md text-center items-center'>Python</li>
                        <li className='bg-yellow-500 cursor-pointer px-3 py-3 text-black font-bold text-center items-center rounded-md'>C#/Asp.Net</li>
                        <li className='bg-yellow-500 cursor-pointer px-3 py-3 text-black font-bold rounded-md text-center items-center'>javascript</li>
                        <li className='bg-yellow-500 cursor-pointer px-3 py-3 text-black font-bold rounded-md text-center items-center'>Next.js</li>
                        <li className='bg-yellow-500 cursor-pointer px-3 py-3 text-black font-bold rounded-md text-center items-center'>Typescript</li>
                        <li className='bg-yellow-500 cursor-pointer px-3 py-3 text-black font-bold rounded-md text-center items-center'>Vue.js</li>
                     </ul>
                     <p className='italic mt-4 mb-5 text-lg text-yellow-600 font-bold'>Explore more Categories</p>
                  </div>

                  <div className='w-full px-4 rounded-md mt-10 py-4 pb-7 max-h-[60%] bg-black '>
                     <h1 className='text-white font-bold text-3xl items-center text-center pt-5'>Share Tips on your favorite Tech Language</h1>
                     <div className='flex justify-center mt-4 '>
                       <div className='bg-yellow-500 cursor-pointer items-center md:mt-10 font-bold max-w-[100%] mt-10 md:w-[150px] py-4 px-4 text-xl text-center rounded-xl'>Get Started</div>
                     </div>
                     </div>
               </div>

           </div>
        </div>
     );
}
 
export default Recent;