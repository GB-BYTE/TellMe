import code1 from '../assets/code1.jpg'
import laptop1 from "../assets/laptop1.jpg"
import code3 from "../assets/code3.jpg"
import laptop3 from "../assets/laptop3.jpg"

const AllPosts = () => {
    return ( 
        <div className="w-full px-3 pt-40 pb-10  bg-gray-100">
            <h1 className=" max-w-[1540px] mx-auto mb-10 font-bold text-3xl italic">#All Post</h1>
            <div className="max-w-[1540px] mx-auto justify-center grid md:grid-cols-3 gap-5 xl:gap-5">
               
              <div className="border-neutral-600 rounded-xl shadow-2xl overflow-hidden pb-6">
                  <img className="w-full h-[300px] object-cover" src={code3} alt="codesetup"/>
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
                 <img className="w-full h-[300px] object-cover" src={laptop3} alt="codesetup"/>
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
                  <img className="w-full h-[300px] object-cover" src={code1} alt="codesetup"/>

                  <div className="px-4">
                    <div className="bg-yellow-500 font-bold max-w-[100px] block uppercase text-black mt-4 py-3 text-center rounded-md">Javacript</div>
                    <h2 className="font-bold mt-3 mb-1 text-3xl w-full">Is Coding still Worth Learning In 2024?</h2>
                    <span className="text-gray-500 font-bold">Aug 23, 2024 - 15 min read</span>
                      <p className="mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in delectus vel! Sit nihil neque, ipsum asperiores libero provident expedita reiciendis fugit aliquam id odio nisi dolor necessitatibus aliquid animi...
                      </p>
                  </div>
              </div>

            </div>
            <div className='bg-yellow-500 font-bold mt-20 text-center mx-auto max-w-[200px] p-4 rounded-md cursor-pointer'>
                <p>See More</p>
            </div>
        </div>
     );
}
 
export default AllPosts;