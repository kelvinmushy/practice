import React from "react";

const About = () => {
  return <div>
    
   
    <section className="job-section">
   <div className="auto-container">
      <div className="sec-title text-center">
         <h2>Featured Jobs</h2>
         <div className="text">Know your worth and find the job that qualify your life</div>
      </div>
      <div className="row aos-init aos-animate" data-aos="fade-up">
         <div className="job-block col-lg-6 col-md-12 col-sm-12">
            <div className="inner-box">
               <div className="content">
                  <span className="company-logo">
                    

                    </span>
                  <h4><a href="/job-single-v1/1">Software Engineer (Android), Libraries</a></h4>
                  <ul className="job-info">
                     <li><span className="icon flaticon-briefcase"></span>Segment</li>
                     <li><span className="icon flaticon-map-locator"></span>London, UK</li>
                     <li>
                        <span className="icon flaticon-clock-3"></span> 
                     </li>
                     <li>
                        <span className="icon flaticon-money"></span> 
                     </li>
                  </ul>
                  <ul className="job-other-info">
                     <li className="time">Full Time</li>
                     <li className="privacy">Private</li>
                     <li className="required">Urgent</li>
                  </ul>
                  <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
               </div>
            </div>
         </div>
         <div className="job-block col-lg-6 col-md-12 col-sm-12">
            <div className="inner-box">
               <div className="content">
                  <span className="company-logo">
                  

                    </span>
                  <h4><a href="/job-single-v1/6">Software Engineer (Android), Libraries</a></h4>
                  <ul className="job-info">
                     <li><span className="icon flaticon-briefcase"></span>Figma</li>
                     <li><span className="icon flaticon-map-locator"></span>London, UK</li>
                     <li>
                        <span className="icon flaticon-clock-3"></span> 
                     </li>
                     <li>
                        <span className="icon flaticon-money"></span> $35k - $45k
                     </li>
                  </ul>
                  <ul className="job-other-info">
                     <li className="time">Freelancer</li>
                     <li className="privacy">Private</li>
                     <li className="required">Urgent</li>
                  </ul>
                  <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
               </div>
            </div>
         </div>
      </div>
      <div className="btn-box"><a className="theme-btn btn-style-one bg-blue" href="/job-list-v1"><span className="btn-title">Load More Listing</span></a></div>
   </div>
</section>




  </div>;
};

export default About;