
import React from 'react';



const NavBar=()=>{
    return (
        <>
         <div className='px-2 h-24 shadow-md w-full  '>
                  <div className="nav-outer">
                     <div className="logo-box">
                        <div className="logo">
                               {/* <a href="/">
                                <img alt="brand" fetchpriority="high" width="154" height="50" decoding="async" data-nimg="1" src="/images/logo.svg" style="color: transparent;">

                                </a> */}
                            </div>
                     </div>
                     <nav className="nav main-menu  justify-content-end pt-3">
                        <ul className="navigation" id="navbar">
                           <li className=" dropdown">
                              <span>Pages</span>
                              <ul>
                                 <li className="dropdown">
                                    <span className="">Shop</span>
                                    <ul>
                                       <li className=""><a href="/shop/shop-list">Shop List</a></li>
                                       <li className=""><a href="/shop/shop-single/1">Shop Single</a></li>
                                    
                                    </ul>
                                 </li>
                                 <li className=""><a href="/about">About</a></li>
                                 <li className=""><a href="/pricing">Pricing</a></li>
                              
                              </ul>
                           </li>
                           
                           <li className=" dropdown">
                              <span>Pages</span>
                              <ul>
                               
                              </ul>
                           </li>
                        </ul>
                     </nav>
                  </div>
            
          </div>
       
        </>
    )

}

export default NavBar;