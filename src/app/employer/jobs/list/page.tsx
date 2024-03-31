import { create } from "domain";
import Image from "next/image";
import React from "react";
import logo from '../../../../../public/logo/hamia_logo.png';
import '../../../../../public/css/custom.css'
import Link from "next/link";
import { AiOutlineMenu ,AiOutlineClose, AiOutlineAccountBook} from "react-icons/ai";


const List=()=>{

    return (
     <>
       <section className="user-dashboard">

          <div className="dashboard-outer">
           <div className="upper-title-box">
            <h3>All Applicants!</h3>
            <div className="text">Ready to jump back in?</div>
         </div>

          <div className="mb-4 ms-0 show-1023">

            <button type="button" className="theme-btn toggle-filters">

             <span className="flaticon-menu-1">
            </span>

           Menu</button>

           </div>
           <div className="row">
             <div className="col-lg-12">
                  
             <div className="ls-widget">

                  <div className="tabs-box">
                            
                  <div className="widget-title">
                     <h4>Applicant</h4>
                     <div className="chosen-outer">
                        <select className="chosen-single form-select chosen-container">
                           <option>Select Jobs</option>
                           <option>Last 12 Months</option>
                           <option>Last 16 Months</option>
                           <option>Last 24 Months</option>
                           <option>Last 5 year</option>
                        </select>
                        <select className="chosen-single form-select chosen-container">
                           <option>All Status</option>
                           <option>Last 12 Months</option>
                           <option>Last 16 Months</option>
                           <option>Last 24 Months</option>
                           <option>Last 5 year</option>
                        </select>
                     </div>
                  </div>
                  <div className="widget-content">
                     <div className="tabs-box">
                        <div className="react-tabs" data-rttabs="true">
                           <div className="aplicants-upper-bar">
                              <h6>Senior Product Designer</h6>
                              <ul className="aplicantion-status tab-buttons clearfix" role="tablist">
                                 <li className="tab-btn totals react-tabs__tab--selected" role="tab" id="tab:r1:0" aria-selected="true" aria-disabled="false" aria-controls="panel:r1:0"  data-rttab="true"> Total(s): 6</li>
                                 <li className="tab-btn approved" role="tab" id="tab:r1:1" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:1" data-rttab="true"> Approved: 2</li>
                                 <li className="tab-btn rejected" role="tab" id="tab:r1:2" aria-selected="false" aria-disabled="false" aria-controls="panel:r1:2" data-rttab="true"> Rejected(s): 4</li>
                              </ul>
                           </div>
                           <div className="tabs-content">
                              <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:r1:0" aria-labelledby="tab:r1:0">
                             
                              <div className="row">
                              <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                                       <div className="inner-box">
                                          <div className="content">
                                             <figure className="image">

                                               <Link href="/">
                                                <Image src={logo} height="50" width="90" alt="Logo" priority className="cursor-pointer"/>
                                               </Link>
                                            </figure>
                                             <h4 className="name">
                                                <a href="/candidates-single-v1/18">Darlene Robertson</a>
                                             </h4>
                                             <ul className="candidate-info">
                                                <li className="designation">Ui Designer</li>
                                                <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                                                <li><span className="icon flaticon-money"></span> $44 / hour</li>
                                             </ul>
                                             <ul className="post-tags">
                                                <li><a href="#">App</a></li>
                                                <li><a href="#">Design</a></li>
                                                <li><a href="#">Digital</a></li>
                                             </ul>
                                          </div>
                                          <div className="option-box">
                                             <ul className="option-list">
                                                <li><button data-text="View Aplication"><span className="la la-eye"></span></button></li>
                                                <li><button data-text="Approve Aplication"><span className="la la-check"></span></button></li>
                                                <li><button data-text="Reject Aplication"><span className="la la-times-circle"></span></button></li>
                                                <li><button data-text="Delete Aplication"><span className="la la-trash"></span></button></li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                              </div>

                              </div>
                            </div>
                           </div>
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


