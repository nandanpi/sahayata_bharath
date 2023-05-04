import React,{useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {CgDarkMode} from 'react-icons/cg'
import { Link } from "react-router-dom";
import Switcher from '../Switcher.js';
const Navbar = ()=>{
    const [nav,setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }


    return(
        
            <div className=" bg-beige dark:bg-grey rounded-2xl flex justify-between items-center h-24 px-4 max-w-[1850px] mx-auto">
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
                <div className={!nav ? 'fixed left-0 top-20 w-[60%] bg-beige dark:bg-grey rounded-xl h-95 ease-in duration-700':' ease-out duration-1000 fixed top-20 left-[-100%]'}>
                    <ul className=" uppercase">
                    <li className="p-4"><a href="/">Home</a></li>
                    <li className="p-4"><a href="/lsche">Local Schemes</a></li>
                    <li className="p-4"><a href="/nsche">National Schemes</a></li>
                    <li className="p-4"><a href="/about">About</a></li> 
                    </ul>
                </div>
            </div>
        
    )
}
export default Navbar