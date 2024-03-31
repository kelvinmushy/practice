
import React from 'react';


const SideBar=()=>{
    return(
        <div className=''>
          <div className="user-sidebar">
            <div className="pro-header text-end pb-0 mb-0 show-1023">
               <div className="fix-icon"><span className="flaticon-close"></span></div>
            </div>
            <div className="sidebar-inner">
               <ul className="navigation">
                  <li className="active mb-1"><a href="/employers-dashboard/dashboard"><i className="la la-home"></i> Dashboard</a></li>
                  <li className=" mb-1"><a href="/employers-dashboard/company-profile"><i className="la la-user-tie"></i> Company Profile</a></li>
                  <li className=" mb-1"><a href="/employers-dashboard/post-jobs"><i className="la la-paper-plane"></i> Post a New Job</a></li>
                  <li className=" mb-1"><a href="/employers-dashboard/manage-jobs"><i className="la la-briefcase"></i> Manage Jobs</a></li>
                  <li className=" mb-1"><a href="/employers-dashboard/all-applicants"><i className="la la-file-invoice"></i> All Applicants</a></li>
                  <li className=" mb-1"><a href="/employers-dashboard/shortlisted-resumes"><i className="la la-bookmark-o"></i> Shortlisted Resumes</a></li>
                  <li className=" mb-1"><a href="/employers-dashboard/packages"><i className="la la-box"></i> Packages</a></li>
                  <li className=" mb-1"><a href="/employers-dashboard/messages"><i className="la la-comment-o"></i> Messages</a></li>
                  <li className=" mb-1"><a href="/employers-dashboard/resume-alerts"><i className="la la-bell"></i> Resume Alerts</a></li>
                  <li className=" mb-1"><a href="/employers-dashboard/change-password"><i className="la la-lock"></i> Change Password</a></li>
                  <li className=" mb-1"><a href="/login"><i className="la la-sign-out"></i> Logout</a></li>
                  <li className=" mb-1"><a href="/"><i className="la la-trash"></i> Delete Profile</a></li>
               </ul>
            </div>
         </div>
        </div>
    )

}

export default SideBar;