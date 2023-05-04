import React,{useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Link } from "react-router-dom";
import Switcher from '../Switcher.js';
const Navbar = ()=>{
    const [nav,setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }


    return(
        
            <div className=" bg-beige dark:bg-grey flex justify-between items-center h-24 px-4 max-w-[1850px] m-3 rounded-xl">
                <div onClick={handleNav} className=" block md:hidden">
                {!nav ? <AiOutlineClose size={25}/>:<AiOutlineMenu size={25} />}  
                </div>
                <h1 className=" font-bold text-teal dark:text-blue text-2xl"><Link to="/">SAHAYATA BHARATH</Link></h1>
                <ul className="hidden md:flex text-teal dark:text-blue"> 
                    <li className="p-4"><a href="/">Home</a></li>
                    <li className="p-4"><a href="/lsche">Local Schemes</a></li>
                    <li className="p-4"><a href="/nsche">National Schemes</a></li>
                    <li className="p-4"><a href="/about">About</a></li>
                    <li className="p-4">
                    <Switcher />
                    </li>
                </ul>
                <div className="block md:hidden"><Switcher /></div>
                <div className={!nav ? 'm-3 fixed left-0 top-20 w-[45%] bg-beige dark:bg-grey rounded-xl h-95 ease-in duration-700 shadow-2xl':' ease-out duration-1000 fixed top-20 left-[-100%]'}>
                    <ul className=" uppercase">
                    <li className="p-4 text-teal dark:text-blue"><a href="/">Home</a></li>
                    <li className="p-4 text-teal dark:text-blue"><a href="/lsche">Local Schemes</a></li>
                    <li className="p-4 text-teal dark:text-blue"><a href="/nsche">National Schemes</a></li>
                    <li className="p-4 text-teal dark:text-blue"><a href="/about">About</a></li> 
                    </ul>
                </div>
            </div>
        
    )
}
export default Navbar