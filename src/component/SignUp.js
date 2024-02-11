import React, { useState } from 'react';
import '../style/signin.css'
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <> 
            <div className='div_box'>
            <div className="db_box">
                <div className="db_left">
                    <img className='db_l_image' src='https://cdn.create.vista.com/api/media/small/418359674/stock-photo-man-wheelchair-showing-smiling-multiethnic-friends-white-background' alt='loading'></img>
                </div>
                <div className="db_right">
                    <div className='db_logo'>
                        <img className="db_img" src='https://media.istockphoto.com/id/902234158/vector/modern-passionate-disability-people-support-symbol-illustration.jpg?s=2048x2048&w=is&k=20&c=SG1hIFQ0fuAmga80DcJnp8uUQ1KkbMVr_MGBRockJpk=' alt='loading'></img>
                        <div className='db_logosection' >
                            <div className='DE'>Hi, Diverse Enable</div>
                            <div className='WB'>Create New Account</div>
                        </div>
                        
                    </div>

                    <div className='db_log'>
                        
                        <img className="db_google" src='https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png' alt='loading'></img>
                        <Link to='/' className='linkStyle' >
                        <div className='gggg'>Continue with Google</div> 
                        </Link>
                    </div>

                    <div className='dbs_id'>
                    ----------------------------- or ----------------------------- 
                    </div>

                    <div className='input_id'>
                        <input className='inp_id' type='text' placeholder='Name'></input>

                    </div>
                    <div className='input_id'>
                        <input className='inp_id' type='text' placeholder='E-mail'></input>
                        
                    </div>
                    <div className='input_id'>
                        <input className='inp_id' type='text' placeholder='D.O.B'></input>

                    </div> <div className='input_id'>
                        <input className='inp_id' type='text' placeholder='Password'></input>

                    </div>
                    <Link to='/'  className='linkStyle'>
                    <div className='db_logi' ><button className='db_login'>Sign Up</button></div>
                    </Link>
                   
                </div>
            </div>
            </div>
        </>
  );
};
