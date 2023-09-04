import React, {useState} from 'react';
import { useForm, useFormState } from 'react-hook-form';
import './RegistrationForm.css';
import axios from "axios";
import { Link  } from 'react-router-dom';

const RegistrationForm = () => {
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
 
  }


  return (
    <div className="registration-form-container">
      {console.log("User",user)}
      <h2>Placement Management System</h2>
      <img src="./imgs/place.jpeg" alt="Placement" className="logo place" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="fName"
          value={user.fName}
          onChange={handleChange}
          placeholder="First Name"
          // {...register('name', { required: 'Name is required' })}
        />
        {/* {errors.name && <p className="error">{errors.name.message}</p>} */}

        <input
          type="text"
          placeholder="Last Name"
          name="lName"
          value={user.lName}
          onChange={handleChange}
          // {...register('name', { required: 'Name is required' })}
        />
        {/* {errors.name && <p className="error">{errors.name.message}</p>}
         */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          // {...register('email', {
          //   required: 'Email is required',
          //   pattern: {
          //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          //     message: 'Invalid email address'
          //   }
          // })}
        />
        {/* {errors.email && <p className="error">{errors.email.message}</p>} */}
        
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
          // {...register('password', {
          //   required: 'Password is required',
          //   minLength: {
          //     value: 6,
          //     message: 'Password must be at least 6 characters long'
          //   }
          // })}
        />
        {/* {errors.password && <p className="error">{errors.password.message}</p>} */}
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          // {...register('password', {
          //   required: 'Password is required',
          //   minLength: {
          //     value: 6,
          //     message: 'Password must be at least 6 characters long'
          //   }
          // })}
        />
        {/* {errors.password && <p className="error">{errors.password.message}</p>}
         */}
        <button type="submit" onClick={register}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
