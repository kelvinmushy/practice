import React from "react";

const Password=()=>{

    return (
        <section className="user-dashboard  px-10">
       <div className="dashboard-outer ">
      <div className="upper-title-box">
         <h3>Change Password!</h3>
         <div className="text">Ready to jump back in?</div>
      </div>
      <div className="mb-4 ms-0 show-1023"><button type="button" className="theme-btn toggle-filters"><span className="flaticon-menu-1"></span> Menu</button></div>
      <div className="ls-widget">
         <div className="widget-title">
            <h4>Change Password</h4>
         </div>
         <div className="widget-content">
            <form className="default-form">
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
      </div>
   </div>
</section>
    )

}

export default  Password;