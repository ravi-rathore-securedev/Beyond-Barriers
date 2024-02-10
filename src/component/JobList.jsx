import React from 'react'
import '../style/Joblist.css'
import { Nav } from '../Utils/Nav'
import { Footer } from '../Utils/Footer'
import { Link } from 'react-router-dom'
export const JobList = () => {
  return (
    <>
    <Nav/>
    <div className='opportunities'>
        <Link to='/job' className='opportunity'>
        <div className='opportunity'> Job/Internship</div>
        </Link>
        <div className='opportunity'>Govt Schemes</div>
        <Link to='/scholar' className='opportunity'>
        <div className='opportunity'>Scholarship</div>
        </Link>

    </div>

    <div className='opportunity-head'>
    <div className='opportunity-content'>
        Job and Internship
        <p className='opportunity-line'> Apply to Jobs and Internship and get the hiring opportunities</p>
        <div className='opportunity-btn'>Apply Now</div>
    </div>

    <div className='opportunity-img'>

    </div>
    </div>

     <div className='job-opportunity'>

        <div className='job-left'>
            <div className='search'>
            <input className='search-input' placeholder='Search'></input>
            <div className='search-btn'></div>
            </div>
            <div className='filter'>Filter</div>
            <div className='filter-btn'> 
            <input className='search-check' placeholder='Search' type='checkbox'></input>
            Software Developer Intern
            </div>
            <div className='filter-btn'> <input className='search-check' placeholder='Search' type='checkbox'></input>
            AI/ML Engineer Intern</div>

            <div className='filter-btn'> <input className='search-check' placeholder='Search' type='checkbox'></input>
             Data Science Intern
             </div>

            <div className='filter-btn'> <input className='search-check' placeholder='Search' type='checkbox'></input> 
            Data Analyst Intern
            </div>

            <div className='filter-btn'> <input className='search-check' placeholder='Search' type='checkbox'></input>
             Web Developer Intern
             </div>
        </div>
        <div className='job-right'>
            <div className='job-cards'>
            <div className='job-card'>
                <div className='job-card-img'>  </div>
                <div className='job-content'>
                <div className='company'>Google</div>
                <div className='job-title'>Software Developer Intern</div>
                <div className='job-data'> Last Date to Apply : 20 Feb 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-img2'>  </div>
                <div className='job-content'>
                <div className='company'>TCS</div>
                <div className='job-title'>System Engineer</div>
                <div className='job-data'> Last Date to Apply : 18 Mar 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-img3'>  </div>
                <div className='job-content'>
                <div className='company'>Salesforce</div>
                <div className='job-title'>Data Analyst</div>
                <div className='job-data'> Last Date to Apply : 20 Feb 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-img4'>  </div>
                <div className='job-content'>
                <div className='company'>Walmart</div>
                <div className='job-title'>SWE Intern</div>
                <div className='job-data'> Last Date to Apply : 10 Feb 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-img5'>  </div>
                <div className='job-content'>
                <div className='company'>Adobe</div>
                <div className='job-title'>Data Engineer</div>
                <div className='job-data'> Last Date to Apply : 18 Aug 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-img6'>  </div>
                <div className='job-content'>
                <div className='company'>Infosys</div>
                <div className='job-title'>System Engineer</div>
                <div className='job-data'> Last Date to Apply : 15 April 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            </div>
            


            </div>
        </div>
        
    
    </>











//     <div>
//     <div id="wrapper">
//         <nav className="navbar">Opportunity</nav>
//         <div className="page">
            
//              <div>
//                 <form className="search">
//                     <input className="searchBar" placeholder="Search for opportunity"/>
//                     <button className="btn" type="submit" >
//                         <img src="./assets/search.png" className="image" alt='no img'  />
//                     </button>
//                 </form>
//              </div>
      
//         <div className="recent">
//             <p className="para">Recent Opportunity</p>
//             <div className="job">
//                 <div className="job-detail">
//                     <img src="../Assets/jobAssets/google.png" className="image" alt='no img' /> 
//                         <div className="job-description">
//                             <p className="name">Google</p>
//                             <p>Google Lime Scolarship Program</p>
//                         </div>
//                 </div>

//                 <div className="button">Apply Now</div>
//             </div>
//             <div className="job">
//                 <div className="job-detail">
//                     <img src="/assets/aicte.jpg" className="image" alt='no img' />
//                     <div className="job-description">
//                         <p className="name">AICTE</p><br/>
//                         <p>AICTE Saksham Scolarship</p>
//                     </div>
//                 </div>
//                 <div className="button">Apply Now</div>
//             </div>
//             <div className="job">
//                 <div className="job-detail">
//                     <img src="/assets/google.png" className="image" alt='no img'  />
//                     <div className="job-description">
//                         <p className="name">Google</p><br/>
//                         <p>SDE-1</p>
//                     </div>
//                 </div>
//                 <div className="button">Apply Now</div>
//             </div>
//             <div className="job">
//                 <div className="job-detail">
//                     <img src="/assets/Adobe.jpg" className="image" alt='no img' />
//                     <div className="job-description">
//                         <p className="name">Adobe</p><br/>
//                         <p>Data Engineer</p>
//                     </div>
//                 </div>
//                 <div className="button">Apply Now</div>
//             </div>
//             <div class="job">
//                 <div className="job-detail">
//                     <img src="/assets/microsoft.png" className="image" alt='no img'  />
//                     <div className="job-description">
//                         <p className="name">Microsoft</p>
//                         <p>Microsoft Disability Scolarship</p>
//                     </div>
//                 </div>
//                 <div className="button">Apply Now</div>
//             </div>
//             <div className="job">
//                 <div className="job-detail">
//                     <img src="/assets/TCS_Logo.jpg" className="image" alt='no img'/>
//                     <div className="job-description">
//                         <p className="name">TCS</p>
//                         <p>System Engineer</p>
//                     </div>
//                 </div>
//                 <div className="button">Apply Now</div>
//             </div>
//             <div className="job">
//                 <div className="job-detail">
//                     <img src="/assets/salesforce.jpg" className="image" alt='no img' />
//                     <div className="job-description">
//                         <p className="name">Salesforce</p>
//                         <p>Data Analyst</p>
//                     </div>
//                 </div>
//                 <div className="button">Apply Now</div>
//             </div>
//             <div className="job">
//                 <div className="job-detail">
//                     <img src="/assets/walmart.jpg" className="image" alt='no img'  />
//                     <div className="job-description">
//                         <p className="name">Walmart</p>
//                         <p>SWE</p>
//                     </div>
//                 </div>
//                 <div className="button">Apply Now</div>
//             </div>
//             <div className="job">
//                 <div className="job-detail">
//                     <img src="/assets/infosys.jpg" className="image" alt='no img' />
//                     <div className="job-description">
//                         <p className="name">Infosys</p>
//                         <p>System Engineer</p>
//                     </div>
//                 </div>
//                 <div className="button">Apply Now</div>
//             </div>
//         </div>

//         </div>
//     </div>
// </div>
  )
}
