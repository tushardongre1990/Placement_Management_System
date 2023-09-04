import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to the Placement Management System! We are dedicated to providing a seamless platform for managing placement activities and connecting students with potential employers.
      </p>
      <p>
        Our system allows students to create profiles, upload resumes, and apply for job opportunities. Employers can post job openings, review applications, and schedule interviews with qualified candidates.
      </p>
      <p>
        With our user-friendly interface and powerful features, we aim to streamline the entire placement process and enhance the chances of successful placements for both students and employers.
      </p>
      <p>
        Whether you are a student seeking exciting career opportunities or an employer looking for talented individuals, the Placement Management System is here to simplify the process and make it more efficient.
      </p>
      <p>
        Thank you for choosing our platform. We are committed to continually improving and providing the best experience for all users.
      </p>
      <h2> Our Team!!</h2>
      <div className="image-gallery">
        <div>
        <img src="./imgs/Vaishnavi.jpg" alt="Vaishnavi"/>
        <h3>Vaishnavi Badoge</h3>
        <h4>Principal</h4>
        </div>
        <div>
        <img src="./imgs/Tushar.jpg" alt="Tushar" />
        <h3>Tushar Dongre</h3>
        <h4>TPO</h4>
        </div>
        <div>
        <img src="./imgs/Chaitanya.jpg" alt="Chaitanya" />
        <h3>Chaitanya Satalkar</h3>
        <h4>HOD</h4>
        </div>
      
      
      
    </div>
    </div>
    
  );
};

export default AboutUs;
