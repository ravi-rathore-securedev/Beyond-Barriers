import React from 'react'
import { Nav } from '../Utils/Nav'
import { Footer } from '../Utils/Footer'
import '../style/Scholarship.css'
import { Link } from 'react-router-dom'
export const Scholarlist = () => {
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
    <div className='opportunity-img1'>

</div>
    <div className='opportunity-content1'>
       Scholarships Opportunities
        <p className='opportunity-line1'>Scholarship Related information opportunities for Specially Abled Students</p>
        <div className='opportunity-btn1'>Apply Now</div>
    </div>
 
</div>
<div className='job-right1'>
            <div className='job-cards'>
            <div className='job-card'>
                <div className='job-card-imgs1'>  </div>
                <div className='job-content'>
                <div className='company'>AICTE</div>
                <div className='job-title'>AICTE Saksham Scholarship</div>
                <div className='job-data'> Last Date to Apply : 20 Feb 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-imgs2'>  </div>
                <div className='job-content'>
                <div className='company'>Google</div>
                <div className='job-title'>Google Lime Scholarship Program</div>
                <div className='job-data'> Last Date to Apply : 18 Mar 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-imgs3'>  </div>
                <div className='job-content'>
                <div className='company'>Microsoft</div>
                <div className='job-title'>Microsoft Disability  Scholarship</div>
                <div className='job-data'> Last Date to Apply : 20 Feb 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-imgs4'>  </div>
                <div className='job-content'>
                <div className='company'>Amazon</div>
                <div className='job-title'>FFE Scholarship</div>
                <div className='job-data'> Last Date to Apply : 10 Feb 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-imgs5'>  </div>
                <div className='job-content'>
                <div className='company'>Tata</div>
                <div className='job-title'>Tata Scholarship Program</div>
                <div className='job-data'> Last Date to Apply : 18 Aug 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            <div className='job-card'>
                <div className='job-card-imgs6'>  </div>
                <div className='job-content'>
                <div className='company'>Flipkart</div>
                <div className='job-title'>Buddy for Study Scholarship</div>
                <div className='job-data'> Last Date to Apply : 15 April 2024</div>
                <div className='apply-btn'>Apply Now</div>
                </div>
            </div>
            </div>
            


            </div>
            <Footer/>
    </>
  )
}
