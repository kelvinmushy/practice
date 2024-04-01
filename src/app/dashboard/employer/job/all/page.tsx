import React from "react";
import Image from "next/image";
import logo from '../../../../../../public/logo/hamia_logo.png';
import '../../../../../../public/css/custom.css'
import Link from "next/link";


const List=()=>{

    return (
     <>
       <section className="user-dashboard flex flex-row p-10" >

          <div className="dashboard-outer">
           <div className="upper-title-box">
            <h3>All Applicants!</h3>
            <div className="text">Ready to jump back in?</div>
         </div>

         <div className="mb-4 ms-0 show-1023"><button type="button" className="theme-btn toggle-filters">
    <span className="flaticon-menu-1"></span> Menu</button></div>
      <div className="row">
         <div className="col-lg-12">
            <div className="ls-widget">
               <div className="tabs-box">
                  <div className="widget-title">
                     <h4>My Job Listings</h4>
                     <div className="chosen-outer">
                        <select className="chosen-single form-select">
                           <option>Last 6 Months</option>
                           <option>Last 12 Months</option>
                           <option>Last 16 Months</option>
                           <option>Last 24 Months</option>
                           <option>Last 5 year</option>
                        </select>
                     </div>
                  </div>
                  <div className="widget-content">
                     <div className="table-outer">
                        <table className="default-table manage-job-table">
                           <thead>
                              <tr>
                                 <th>Title</th>
                                 <th>Applications</th>
                                 <th>Created &amp; Expired</th>
                                 <th>Status</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div className="job-block">
                                       <div className="inner-box">
                                          <div className="content">
                                             <span className="company-logo">
                                             <Link href="/">
                                                <Image src={logo} height="50" width="90" alt="Logo" priority className="cursor-pointer"/>
                                             </Link>
                                              </span>
                                             <h4><a href="/job-single-v3/1">Software Engineer (Android), Libraries</a></h4>
                                             <ul className="job-info">
                                                <li><span className="icon flaticon-briefcase"></span>Segment</li>
                                                <li><span className="icon flaticon-map-locator"></span>London, UK</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="applied"><a href="#">3+ Applied</a></td>
                                 <td>October 27, 2017 April 25, 2011</td>
                                 <td className="status">Active</td>
                                 <td>
                                    <div className="option-box">
                                       <ul className="option-list">
                                          <li><button data-text="View Aplication"><span className="la la-eye"></span></button></li>
                                          <li><button data-text="Reject Aplication"><span className="la la-pencil"></span></button></li>
                                          <li><button data-text="Delete Aplication"><span className="la la-trash"></span></button></li>
                                       </ul>
                                    </div>
                                 </td>
                              </tr>
                          
                             
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      </div>

      </section>
      
     
     </>
    )


}


export default  List;


