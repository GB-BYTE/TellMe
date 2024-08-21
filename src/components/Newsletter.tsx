const Newsletter = () => {
    return ( 
        <div className="w-full mt-20 bg-black h-full my-50">
           <div className="max-w-[1540px] mx-auto px-6 py-20 md:py-40 grid lg:grid-cols-3 gap-10">
              <div className="col-span-2 text-white">
                 <h2 className="text-4xl"> Want tips and tricks about your coding interest?</h2>
                 <p className="italic text-lg mt-3">Sign up to our newsletter and stay up to date</p>
              </div>
              <div className="col-span-1">
                  <div className="flex flex-col sm:flex-row mb-3 gap-3">
                     <input className="rounded-md w-full text-black px-4 py-3" type="text" placeholder="Enter Email" />
                     <button className="bg-yellow-400  font-medium max-w-[200px] px-6 py-3 text-nowrap text-black rounded-lg">Notify Me</button>
                  </div >
                    <p className="text-white md:text-lg">We care about the protection of your data. <br></br> Read our <span className="text-yellow-400">Privacy Policy</span></p>
              </div>
           </div>
        </div>
     );
}
 
export default Newsletter;