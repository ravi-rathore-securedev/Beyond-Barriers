import React from 'react'
import { Nav } from '../Utils/Nav'
import '../style/Main.css'
import { Footer } from '../Utils/Footer'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <>
    <Nav/>
    <div className='main-description'>
        <div className='main-head'>
            <h1 className='main-heading'> A Special Community</h1>
            <p className='main-p'>DiverseEnable Is A Community Designed To Empower And Support Specially-Abled Individuals. Our Platform Provides A Space For Sharing Opportunities, Interacting With Each Other, And Fostering A Sense of Belonging. Join us today and be part of a community that goes Beyond Barriers.</p>

        </div>
        <div className='main-imghead'>
            <div className='main-img'>
            </div>
        </div>
    </div>
    <div className='main-feature'>
        <div className='feature-head'>Features</div>
        <p className='feature-discp'>Discover the key features of Diverse Enable</p>
        <div className='feature-box'>
            <Link to='/job' className='link-style'>
            <div >
                Opportunities
                <p className='feature-box-discp'>opportunities related to job,govt. schemes, scholarships</p>
            </div>
            </Link>
            <Link to='/job' className='link-style'>
            <div>
                Community Forum
                <p className='feature-box-discp'>Interact with different people in the community and learn a new way of living by sharing experiences</p>
            </div>
            </Link>
            <div className='feature-box1'>
                Preparation
                <p className='feature-box-discp'>
                    Prepare yourself for a better life, gain knowledge and experience to advance in career 
                </p>
            </div>
        
            <div className='feature-box1'>
                Explore
                <p className='feature-box-discp'>Explore people by interaction and communication and view post</p>
            </div>
        </div>
    </div>
    <div className='goal-container'>
        <div className='goal-left'>
        <div className='goal-leftcontainer'>
        <div className='goal-heading'>About Us</div>
        <div className='goal-content'>Our project aims to create an inclusive online platform tailored specifically for individuals with disabilities. Through a user-friendly interface, we provide a comprehensive range of resources, support, and opportunities to empower and uplift the disabled community. Our platform comprises three main sections: Opportunities, Explore, and Community Forum.<br/>
        <br/>
 We foster a supportive and engaging space for individuals with disabilities to connect, share experiences, and seek advice from peers and empowerment within the disabled community.<br/>
 <br/>
 The primary goal of this platform is to provide a supportive environment where members of the disabled community can access resources, support, and opportunities to enhance their well-being and empowerment.</div>
        </div>
        </div>
        <div className='goal-right'>
        <div className='goal-img'>
        </div>
        </div>

    </div>
    <div className='resource-container'>
        <div className='resource-heading'>Community</div>
        <p className='feature-discp'>See how our community comes togetherSee Some Of The Inspiring Stories From Our Community</p>
        <div className='resource-content'>
            <div className='resource-box1'>
              
            </div>
            <div className='resource-box2'>
                
            </div>
            <div className='resource-box3'>
               
            </div>
            <div className='resource-box4'>
                
            </div>
            <div className='resource-box5'>
              
            </div>
            <div className='resource-box6'>
               
            </div>
        </div>
    </div>
    <div className='end-container'>
        <div className='end-heading'>Join Us Today</div>
        <p className='end-discp'>Join our Special community and be a part of the change</p>
        <div className='end-form'>
            <input className='end-input' type='text' placeholder='Enter Your Email'/>
            <button className='end-btn'>Join</button>
        </div>
       <Footer/>

    </div>
    </>
  )
}
