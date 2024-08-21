import React from "react";
import code1 from '../assets/code1.jpg'
import laptop1 from "../assets/laptop1.jpg"
import code3 from "../assets/code3.jpg"
import laptop3 from "../assets/laptop3.jpg"


const Articles = () => {
    return ( 
        <div className="w-full h-full px-3 py-20  bg-gray-50">
            <h1 className=" max-w-[1540px] mx-auto mb-10 font-bold text-3xl italic">#Recent Articles</h1>
            <div className="max-w-[1540px] mx-auto justify-center grid md:grid-cols-2 gap-20 xl:gap-36">
               
            <div className="border-neutral-600 rounded-xl shadow-2xl overflow-hidden pb-6">
                  <img className="w-full h-[400px] object-cover" src={code3} alt="codesetup"/>
                  <div className="px-4">
                    <div className="bg-yellow-500 max-w-[100px] block uppercase text-black font-bold mt-4 py-3 text-center rounded-md">C#/ASP.NET</div>
                    <h2 className="font-bold mt-3 mb-1 text-3xl w-full">Why you should learn ASP.NET As a Beginner Developer</h2>
                    <span className="text-gray-500 font-bold">Aug 23, 2024 - 15 min read</span>
                    <p className="mt-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in delectus vel! Sit nihil neque, ipsum asperiores libero provident expedita reiciendis fugit aliquam id odio nisi dolor necessitatibus aliquid animi...
                    </p>
                  </div>
              </div>

              <div className="border-gray-500 rounded-xl shadow-2xl overflow-hidden pb-6">
                  
                 <img className="w-full h-[400px] object-cover" src={laptop3} alt="codesetup"/>
                 <div className="px-4">
                    <div className="bg-yellow-500 max-w-[100px] block uppercase text-black font-bold mt-4 py-3 text-center rounded-md">C#/ASP.NET</div>
                    <h2 className="font-bold mt-3 mb-1 text-3xl w-full">Why you should learn ASP.NET As a Beginner Developer</h2>
                    <span className="text-gray-500 font-bold">Aug 23, 2024 - 15 min read</span>
                    <p className="mt-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in delectus vel! Sit nihil neque, ipsum asperiores libero provident expedita reiciendis fugit aliquam id odio nisi dolor necessitatibus aliquid animi...
                    </p>
                  </div>
              </div> 

              <div className="border-gray-500 rounded-xl shadow-2xl overflow-hidden pb-6">
                  <img className="w-full h-[400px] object-cover" src={code1} alt="codesetup"/>

                  <div className="px-4">
                    <div className="bg-yellow-500 font-bold max-w-[100px] block uppercase text-black mt-4 py-3 text-center rounded-md">Javacript</div>
                    <h2 className="font-bold mt-3 mb-1 text-3xl w-full">Is Coding still Worth Learning In 2024?</h2>
                    <span className="text-gray-500 font-bold">Aug 23, 2024 - 15 min read</span>
                      <p className="mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in delectus vel! Sit nihil neque, ipsum asperiores libero provident expedita reiciendis fugit aliquam id odio nisi dolor necessitatibus aliquid animi...
                      </p>
                  </div>
              </div>

              <div className="border-neutral-600 rounded-xl shadow-2xl overflow-hidden pb-6">
                   <img className="w-full h-[400px] object-cover" src={laptop1} alt="codesetup"/>
                  <div className="px-4">
                    <div className="bg-yellow-500 font-bold max-w-[100px] block uppercase text-black mt-4 py-3 text-center rounded-md">C#/ASP.NET</div>
                    <h2 className="font-bold mt-3 mb-1 text-3xl w-full">Why you should learn ASP.NET As a Beginner Developer</h2>
                    <span className="text-gray-500 font-bold">Aug 23, 2024 - 15 min read</span>
                    <p className="mt-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in delectus vel! Sit nihil neque, ipsum asperiores libero provident expedita reiciendis fugit aliquam id odio nisi dolor necessitatibus aliquid animi...
                    </p>
                  </div>
                  
              </div>

             
            </div>
        </div>
     );
}
 
export default Articles
;