import React, { useState } from "react";
import './RegistrationForm.css';
import { useForm, useFormState } from 'react-hook-form';
import axios from "axios";


function SignUp() {
  const {  handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Perform registration logic here
  };

  const [user, setUser] = useState ({
    fName:"",
    lName:"",
    email:"",
    password:"",
    confirmPassword:""

  })
  const handleChange = e => {
    const { name, value} = e.target
    //console.log(name, value)
    setUser (
      {
        ...user,
        [name] : value
      }
    )
  
  }

 const register = () => {
    const { fName,lName, email, password, confirmPassword } = user
    if(fName && lName && email && (password === confirmPassword)){
      axios.post("http://localhost:9002/register", user)
      .then(res => console.log(res))
      alert("Registration Succesfull")
    } else {
      alert("invalid input")
    }

  };

  const validateForm = () => {
    const newErrors = {};

    // Validate first name
    if (!user.fName.trim()) {
      newErrors.fName = "Please enter your name";
    }

    // Validate last name
    if (!user.lName.trim()) {
      newErrors.lName = "Please enter your last name";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(user.email.trim())) {
      newErrors.email = "Invalid email address";
    }

    // Validate password
    if (!user.password.trim()) {
      newErrors.password = "Please enter your password";
    } else if (user.password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else if (
      !/[A-Z]/.test(user.password.trim()) ||
      !/[a-z]/.test(user.password.trim()) ||
      !/[!@#$%^&*]/.test(user.password.trim())
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one special symbol";
    }
    

    // Validate confirm password
    if (user.confirmPassword.trim() !== user.password.trim()) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  return (
    <>
      <div className="registration-form-container">
       
            <div>
            <h2>Placement Management System</h2>
      <img src="./imgs/place.jpeg" alt="Placement" className="logo place" />
              <form onSubmit={handleSubmit}>
                <div className="d-flex">
                  <div style={{ flex: 1 }}>
                    <div>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="First Name"
                        className={`form-control form-control-lg ${
                          errors.fullname ? "is-invalid" : ""
                        }`}
                        value={user.fullname}
                        onChange={handleChange}
                      />
                      {errors.fullname && (
                        <p className="text-danger">{errors.fullname}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="username"
                        placeholder="Last Name"
                        className={`form-control form-control-lg ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        value={user.username}
                        onChange={handleChange}
                      />
                      {errors.username && (
                        <p className="text-danger">{errors.username}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className={`form-control form-control-lg ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        value={user.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className={`form-control form-control-lg ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        value={user.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                      )}
                    </div>
                  </div>
                  <div className="ms-1" style={{ flex: 1 }}>
            
                    <div>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        className={`form-control form-control-lg ${
                          errors.confirmPassword ? "is-invalid" : ""
                        }`}
                        value={user.confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && (
                        <p className="text-danger">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </div>
                </div>
                <button type="submit" onClick={register}>Register</button>
              </form>
            </div>
          </div>
        
    </>
  );
}

export default SignUp;
