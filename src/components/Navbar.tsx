import {useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { RiMenu2Line } from "react-icons/ri";
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import logo1 from '../assets/logo1.png'


const Navbar = () => {

    const [Nav, setNav] = useState<Boolean>(true);
    const[exit, setexit] =useState<boolean>(false);
    

    const Handlemenu = ()=>{
        setexit(true);
        setNav(!Nav);
        
    }
    const Handleexit =()=>{
        setexit(!exit)
        setNav(true);
       
    }
   
    return ( 
        <div className="max-w-[1540px] mx-auto mt-10 px-4 h-30 items-center">
            <nav className="flex justify-between">
               

                <div className="flex items-center">
                        <img src={logo1} alt="logo" className="w-7 h-7 " />
                        <h1 className="font-bold text-3xl text-grey-300">TellMe</h1> 
                </div>
                 
                 <div className="hidden md:w-[20%] lg:w-[30%] mt-1 h-12 rounded-lg overflow-hidden">
                   <input className="w-full h-full p-2 bg-gray-100 outline-none text-xl" type="text" placeholder="Search Me" />
                 </div>

                <ul className="font-bold  text-[20px] text-black hidden md:flex  gap-5">
                    <li className="m-3">
                        Blog
                    </li>
                    <li className="m-3">Articles</li>
                    <li className="m-3">Most Recent</li>
                    <li className="m-0 text-nowrap flex rounded-xl bg-yellow-300 py-3 px-3 cursor-pointer hover:text-gray-800 transition ease-out duration-500 hover:scale-105">
                     <HiArrowRightStartOnRectangle size={30} className="pr-1" />Get Started</li>
                </ul>

                {/* @ small screens */}
                <div className=" md:hidden items-center flex" onClick={Handlemenu}>
                    <RiMenu2Line size={30}  />
                </div>
              
            </nav>
            
            <div className="w-[100%] sm:w-[60%] md:hidden  mx-auto mt-3 h-12 rounded-lg overflow-hidden">
              <input className="w-full h-full p-2 bg-gray-100 outline-none text-xl" type="text" placeholder="Search Me" />
           </div>


            <div className={(!Nav ? 'block' : 'hidden')} >
                <div className={!exit ? 'hidden menu bg-[yellow] w-[100%] fixed right-0 top-0 max-h-[50%] ease-out duration-500' : 'menu bg-[yellow] w-[100%] fixed right-0 top-0 max-h-[50%] pb-10 ease-in duration-500 md:hidden' }>
                    <div className="flex justify-between">
                        <div className="flex p-5 items-center">
                            <img src={logo1} alt="logo" className="w-7 h-7 " />
                            <h1 className="font-bold text-3xl text-grey-300">TellMe</h1>  
                        </div>
                        <div className="p-5" onClick={Handleexit}>
                        <ImCancelCircle size={25} />
                        </div>
                    </div>
                    
                    
                    <div className="flex  justify-center pt-1">
                        <ul className="font-bold text-gray-500 text-center">
                                <li className="text-xl m-10 active">
                                    Blogs
                                </li>
                                <li className="text-xl m-10">Articles</li>
                                <li className="text-xl m-10">Most Recent</li>
                                {/* <li className="text-xl flex text-nowrap bg-yellow-300 p-2 cursor-pointer hover:text-gray-800 transition ease-out duration-500 hover:scale-110">
                                <HiArrowRightStartOnRectangle size={30} className="pr-1" />Get Started</li> */}
                        </ul>
                    </div>
                </div>
                
            </div>   
     </div>       
       
    );
}
 
export default Navbar;