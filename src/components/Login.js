import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Link  } from 'react-router-dom';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Perform registration logic here
  };
  const [user, setUser] = useState ({
    email:"",
    password:"",
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

const login = () => {
//const history = useHistory()

axios.post("http://localhost:9002/Login", user)
.then(res => console.log(res.data.message))
}

  return (
    <div className="registration-form-container">
      {console.log("User",user)}
      <h2>Placement Management System</h2>
      <img src="./imgs/place.jpeg" alt="Placement" className="logo place" />
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
       
        
        <button type="submit">
        <Link to={"/Dashboard"} className='btn'>Login</Link>
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
