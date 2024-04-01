import React from "react";

const Password=()=>{

    return (
       
           <div className=" flex flex-row w-full p-20 content-center ">
             <form className="default-form ">
               <div className="row">
                  <div className="form-group col-lg-7 col-md-12">
                    <label>Old Password </label>
                  <input type="password" name="name"/></div>
                  <div className="form-group col-lg-7 col-md-12">
                    <label>New Password</label>
                    <input type="password" name="name" required/></div>
                  <div className="form-group col-lg-7 col-md-12">
                    <label>Confirm Password</label>
                  <input type="password" name="name"/>
                  </div>
                   <div className="form-group col-lg-6 col-md-12">
                    <button type="submit" className="theme-btn btn-style-one">
                        Update</button>
                        </div>
               </div>
            </form>
           </div>
       
    )

}

export default  Password;