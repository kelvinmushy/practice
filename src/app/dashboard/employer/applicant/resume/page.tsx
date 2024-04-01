import React from "react";

const Resume=()=>{

    return (
        <section className="user-dashboard md:p-20">
        <div className="dashboard-outer">
           <div className="upper-title-box">
              <h3>Shortlisted Resumes!</h3>
              <div className="text">Ready to jump back in?</div>
           </div>
           <div className="mb-4 ms-0 show-1023"><button type="button" className="theme-btn toggle-filters"><span className="flaticon-menu-1"></span> Menu</button></div>
           <div className="row">
              <div className="col-lg-12">
                 <div className="applicants-widget ls-widget">
                    <div className="widget-title">
                       <h4>Shorlist Resumes</h4>
                       <div className="chosen-outer">
                          <div className="search-box-one">
                             <form method="post" action="blog.html">
                                <div className="form-group"><span className="icon flaticon-search-1"></span>
                                <input placeholder="Search" required type="search" name="search-field"/></div>
                             </form>
                          </div>
                          <select className="chosen-single form-select chosen-container">
                             <option>Newest</option>
                             <option>Last 12 Months</option>
                             <option>Last 16 Months</option>
                             <option>Last 24 Months</option>
                             <option>Last 5 year</option>
                          </select>
                       </div>
                    </div>
                    <div className="widget-content">
                       <div className="row">
                          <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                             <div className="inner-box">
                                <div className="content">
                                   {/* <figure className="image"><img alt="candidates" loading="lazy" width="90" height="90" decoding="async" data-nimg="1" srcset="/_next/image?url=%2Fimages%2Fresource%2Fcandidate-1.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fimages%2Fresource%2Fcandidate-1.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fresource%2Fcandidate-1.png&amp;w=256&amp;q=75" style="color: transparent;"></figure>
                                    */}
                                   <h4 className="name"><a href="/candidates-single-v1/18">Darlene Robertson</a></h4>
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
                          <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                             <div className="inner-box">
                                <div className="content">
                                   {/* <figure className="image"><img alt="candidates" loading="lazy" width="90" height="90" decoding="async" data-nimg="1" srcset="/_next/image?url=%2Fimages%2Fresource%2Fcandidate-2.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fimages%2Fresource%2Fcandidate-2.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fresource%2Fcandidate-2.png&amp;w=256&amp;q=75" style="color: transparent;"></figure>
                                   */}
                                   <h4 className="name"><a href="/candidates-single-v1/19">Wade Warren</a></h4>
                                   <ul className="candidate-info">
                                      <li className="designation">Developer</li>
                                      <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                                      <li><span className="icon flaticon-money"></span> $99 / hour</li>
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
                       <nav className="ls-pagination mb-5">
                          <ul>
                             <li className="prev"><a href="#"><i className="fa fa-arrow-left"></i></a></li>
                             <li><a href="#">1</a></li>
                             <li><a href="#" className="current-page">2</a></li>
                             <li><a href="#">3</a></li>
                             <li className="next"><a href="#"><i className="fa fa-arrow-right"></i></a></li>
                          </ul>
                       </nav>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
     
     
    )

}

export default  Resume;