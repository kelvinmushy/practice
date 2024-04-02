import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
    
    <main>
      <div className=" flex md:flex-row bg-white shadow-md h-20">
      
      <nav className="flex w-full md:flex-row justify-center " >

      <ul  className="flex flex-row gap-4 pt-6 ">

        <Link href="/" className="text-black">
                Home
        </Link>
     
        <Link href="/" className="text-black">
                Home
        </Link>
        <Link href="/" className="text-black">
                Home
        </Link>
      </ul>
      </nav>
       
        
      </div>
     </main>
    </>
  );
};

export default Navbar;