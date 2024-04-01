
import Link from 'next/link';
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
               {/* <Link href="/about"></Link> */}
                   <li className='className="active mb-1"'>
                  <Link href="/dashboard/employer">
                  <i className="la la-home"></i>
                   Dashboard
                  {/* <a href="/employers-dashboard/dashboard">
                        <i className="la la-home"></i>
                   Dashboard</a> */}
                  </Link>
                  </li>

                  <li className=" mb-1">
                         <Link href="/dashboard/employer/profile">
                        <i className="la la-user-tie"></i> Company Profile
                        </Link>
                  
                  </li>
                  <li className=" mb-1">
                         <Link href="/dashboard/employer/job/create">
                        <i className="la la-paper-plane"></i> Post a New Job
                        </Link>
                  
                  </li>
                  <li className=" mb-1">
                         <Link href="/dashboard/employer/job/all">
                        <i className="la la-briefcase"></i>  Manage Jobs
                        </Link>
                  
                  </li>
                  <li className=" mb-1">
                         <Link href="/dashboard/employer/applicant/all">
                        <i className="la la-briefcase"></i>  All Applicant
                        </Link>
                  
                  </li>

                  <li className=" mb-1">
                         <Link href="/dashboard/employer/applicant/shortlisted">
                        <i className="la la-briefcase"></i>  Shortlisted
                        </Link>
                  
                  </li>
                  <li className=" mb-1">
                         <Link href="/dashboard/employer/applicant/resume">
                        <i className="la la-briefcase"></i>  Resume Alert
                        </Link>
                  
                  </li>
                  <li className=" mb-1">
                         <Link href="/dashboard/employer/package">
                        <i className="la la-briefcase"></i>  Packages
                        </Link>
                  
                  </li>
                  <li className=" mb-1">
                         <Link href="/dashboard/employer/message">
                        <i className="la la-comment-o"></i>  Message
                        </Link>
                  
                  </li>
                  <li className=" mb-1">
                         <Link href="/dashboard/employer/password">
                        <i className="la la-comment-o"></i>  Change Password
                        </Link>
                  
                  </li>
        
                  <li className=" mb-1"><a href="/"><i className="la la-sign-out"></i> Logout</a></li>
                  {/* <li className=" mb-1"><a href="/"><i className="la la-trash"></i> Delete Profile</a></li> */}
               </ul>
            </div>
         </div>
        </div>
    )

}

export default SideBar;