
'use client'
import React from "react";
import Link from "next/link";
import logo from '../../public/logo/hamia_logo.png'
import { useState } from "react";
import '../../public/css/custom.css'
import { AiOutlineMenu ,AiOutlineClose, AiOutlineAccountBook} from "react-icons/ai";
import Image from "next/image";



const Home = () => {

  const [menuOpen,setMenu]=useState(false)

   const handleMenu=()=>{

    setMenu(!menuOpen);



}


    return (
      <>
         <div className="fixed w-full h-24 bg-white shadow-xl  ">

           <div className="h-full w-full flex justify-between items-center px-4 2xl:px-16">

            <Link href="/">

            <Image src={logo} height="50" width="90" alt="Logo" priority className="cursor-pointer"/>
            </Link>
            <div className="hidden sm:flex">
            <ul className="hidden sm:flex">
              <Link href="/about">
                <li className="ml-10 uppercase hover:border-b text-xl">About</li>
              </Link>

              <Link href="/about">
                <li className="ml-10  uppercase hover:border-b text-xl">Service</li>
              </Link>

              <Link href="/about">
                <li className="ml-10  uppercase hover:border-b text-xl">Contact Us</li>
              </Link>
              <Link href="/about">
                <li className="ml-10  uppercase hover:border-b text-xl">Service</li>
              </Link>

              <Link href="/about">
                <li className="ml-10  uppercase hover:border-b text-xl">Contact Us</li>
              </Link>

           </ul>
           
            </div>
            <div onClick={handleMenu} className="sm:hidden cursor-pointer pl-24">
              <AiOutlineMenu size="25" />
            </div>
           </div>

           <div className={
              menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ffffff] p-10 ease-in  duration-500" :
              "fixed left-[-100%] top-0 p-10 ease-in duration-500"

            }>
               <ul><li>hhh</li></ul>

              
             </div>

         </div>
      </>
    );
  };
  
  export default Home;