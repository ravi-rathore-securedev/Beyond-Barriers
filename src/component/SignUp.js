import React, { useState } from 'react';
import '../style/singup.css';

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    gender: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    // Implement validation logic before moving to the next step
    // For simplicity, we're assuming all fields are required
    // if (!formData.email || !formData.fullName || !formData.gender || !formData.phoneNumber) {
    //   alert('Please fill in all fields.');
    //   return;
    // }

    setStep(step + 1);
  };

  const handleSubmit = () => {
    // Implement final form submission logic
    // For simplicity, we're just logging the form data
    console.log('Submitted Form Data:', formData);
  };

  return (
    <div className='mains'>
    <div className='container1'>
      <form className='form'>
        <div className='logo'></div>
        {step === 1 && (
          <>
            <h1 className='or1'>Sign Up</h1>
            <input
              type='text'
              placeholder='Email'
              name='email'
              className='input1'
              value={formData.email}
              onChange={handleChange}
            />
            <button type='button'className='buttons' onClick={handleNext}>
              Next
            </button>
            <div className='or'>or</div>
            <button type="submit" className='auth1'>Sign In with Google</button>
          </>
        )}
        {step === 2 && (
          <>
           <h1 className='or1'>Sign Up</h1>
            {/* Add fields for step 2: Full Name, Gender, Phone Number */}
            <input
              type='text'
              placeholder='Full Name'
              name='fullName'
              className='inputs'
              value={formData.fullName}
              onChange={handleChange}
            />
            <select
              type='text'
              placeholder='Gender'
              name='gender'
              className='inputs'

              value={formData.gender}
              onChange={handleChange}
            >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>others</option>
            </select>
            <input
              type='text'
              placeholder='Phone Number'
              name='phoneNumber'
                className='inputs'
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <button type='button' className='buttons' onClick={handleNext}>
              Next
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <h1 className='or'>Sign Up</h1>
            {/* Add fields for step 3: Password, Confirm Password */}
            <input
              type='password'
              placeholder='Password'
              name='password'
              className='input1'
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirmPassword'
              className='input1'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button type='button' className='buttons' onClick={handleSubmit}>
              Submit
            </button>
          </>
        )}
      </form>
      </div>
    </div>
  );
};
