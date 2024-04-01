import React from "react";

import Image from "next/image";

const Profile=()=>{

    return (
        <main>
        <div className="bg-white w-full h-full  p-20">
           <form>
              <div className="flex flex-wrap -mx-3 mb-6 md:mb-mb-6">
                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                       Company Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                     Email Address
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Phone
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Website
                    </label>
                    <select className="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                       <option value="2">Hello</option>
                       <option value="3">Three</option>
                       <option value="5">Five</option>
                    </select>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Est. Since
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Team Size
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Retail
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Allow In Search & Listing
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                     
                 <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                    
                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
                    About 
                 </label>
                  <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                  </textarea>

                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Country
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                    
               
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    City
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Address
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>

                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Facebook
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                    
               
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Twitter
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Linkedin
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
                 <div className="w-full md:w-1/2 px-3  mt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Google Plus
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                 </div>
              </div>
           </form>
          
        </div>
     </main>
     
     
    )

}


export default Profile;