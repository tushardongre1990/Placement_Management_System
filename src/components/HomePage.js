import React from 'react';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="company-details">
        <h1>Welcome to Placement Management System</h1>
        <h2 className="h2">
        Don't watch the clock; do what it does. Keep going!!
        </h2>
        <p>
        We are here to Build your Skills and Career with our Driven Passion
          and Reality. Click Below to get current drive details

        </p>
        <p>
        Remember, success in placements is not solely dependent on your academic performance but also on your attitude, preparation, and perseverance. Stay motivated, keep pushing forward, and believe in your abilities. Your hard work and dedication will pay off in the end. Good luck!
        </p>
      </div>
      
      <div className='div3'>
      <div>
      <h2>Placement Statistics</h2>
      <p>
        Successful Placements: <strong>150</strong>
      </p>
      <p>
        Percentage of Students Placed: <strong>75%</strong>
      </p>
      <h5>Top Hiring Companies</h5>
      <ul className="company-list">
        <li><strong>TCS : </strong>50 placements</li>
        <li><strong>Apple : </strong>45 placements</li>
        <li><strong>Google : </strong> 40 placements</li>
      </ul>
      </div>
      <div className='div4'>
      <h2>Placement Process Overview</h2>
      <ol className="process-steps">
        <li>Step 1: Registration and Profile Creation</li>
        <li>Step 2: Resume Submission</li>
        <li>Step 3: Aptitude Test</li>
        <li>Step 4: Technical Interviews</li>
        <li>Step 5: HR Interview</li>
        <li>Step 6: Offer Letter</li>
        <li>Step 7: Placement</li>
      </ol>
      <p>
        Our placement process is designed to help you secure your dream job. </p><p>Each step is crucial and
        provides an opportunity for you to showcase your skills and expertise. </p><p>We provide guidance and
        support at every stage to maximize your chances of success.
      </p>
     
      </div>
      <div className="upcoming-events">
      <h2>Upcoming Placement Events</h2>
      <ul className="event-list">
        <li>
          <span className="event-date">June 25, 2023</span>
          <span className="event-company">TCS</span>
          <span className="event-details">Job Fair</span>
        </li>
        <li>
          <span className="event-date">July 2, 2023</span>
          <span className="event-company">Apple</span>
          <span className="event-details">Campus Recruitment Drive</span>
        </li>
        <li>
          <span className="event-date">July 10, 2023</span>
          <span className="event-company">Google</span>
          <span className="event-details">Tech Talk & Networking Event</span>
        </li>
      </ul>
    </div>
    </div>
      <div className="company-logos div2">
        <img src="./imgs/TCS.png" alt="TCS" className="logo" />
        <img src="./imgs/accenture.png" alt="Accenture" className="logo" />
        <img src="./imgs/congnizant.jpeg" alt="Cognizant" className="logo" />
        <img src="./imgs/apple.png" alt="Apple" className="logo" />
        <img src="./imgs/hp.png" alt="HP" className="logo" />
        <img src="./imgs/sony.png" alt="Sony" className="logo" />
        <img src="./imgs/Lt.png" alt="L&T" className="logo" />
        <img src="./imgs/Hero.png" alt="Hero" className="logo" />
      </div>
      <div class="div1">
      <img src="./imgs/Google.jpeg" alt="Google" className="logo" />
      <img src="./imgs/Microsoft.png" alt="Microsoft" className="logo img1" />
      <img src="./imgs/amazon.jpeg" alt="Amazon" className="logo img1" />
      <img  src="./imgs/oracle.png" alt="Oracle" className="logo img1" />
      </div>
    </div>
  );
};

export default HomePage;
