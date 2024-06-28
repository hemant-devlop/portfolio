import React from 'react';

const Resume = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' ,textAlign:'center' }}>
      <h1>Hemant Kumar</h1>
      <p>Email: <a href="mailto:hemant.devlop@gmail.com  ">Hemant.devlop@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/hemantdevloper" target="_blank" rel="noopener noreferrer">Linkedin/hemantdevloper</a></p>
      <p>Location: Atei, Haryana (123021)</p>
      
      <hr />
      
      <section>
        <h2>Summary</h2>
        <p>
          Highly skilled web developer with hand on project experience in JavaScript ES6+, React.js ,and MUI.
          Passionate about creating visually appealing and user-friendly websites and web application. Possesses excellent
          problem-solving skills, and is always eager to stay updated with the latest web trends and
          technologies.
        </p>
      </section>
      
      <hr />
      
      <section>
        <h2>Education</h2>
        <ul>
          <li>BCA from Indira Gandhi University, Mirpur (Rewari, Haryana) (2020-2023)</li>
          <li>12th Commerce, Govt. Sr. Sec School - Ateli (2020)</li>
        </ul>
      </section>
      
      <hr />
      
      <section>
        <h2>Training</h2>
        <p>
          Currently, I am undergoing comprehensive training at Ducat Institute in Gurgaon, where I am honing
          my skills in MERN stack. My experience at Ducat has equipped me with a solid foundation and practical
          exposure to the latest industry trends.
        </p>
      </section>
      
      <hr />
      
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: JavaScript, HTML, CSS</li>
          <li>Libraries/Frameworks: React.js, Redux Toolkit,React-Bootstrap, MUI, Thunk</li>
          <li>Tools/Platforms: VS Code, Postman</li>
          <li>Databases: MongoDB</li>
          <li>Deployment: Netlify</li>
        </ul>
      </section>
      
      <hr />
      
      <section>
        <h2>Project</h2>
        <h3>My Portfolio: <a href="https://hemantdeveloper.netlify.app" target="_blank" rel="noopener noreferrer">Hemantdeveloper.app</a></h3>
        <ul>
          <li>Developed a responsive portfolio website using React, React Router, Axios, and Bootstrap.</li>
          <li>Integrated React-Router-Dom for seamless navigation.</li>
          <li>Employed Axios for efficient data fetching and incorporation of external data.</li>
          <li>Styled the website with Bootstrap, ensuring a polished and modern design.</li>
          <li>Successfully deployed the portfolio on Netlify, optimizing for performance and accessibility.</li>
        </ul>
      </section>
      
      <hr />
      
      <section>
        <h2>Hobbies</h2>
        <ul>
          <li>Exploring AI tools</li>
          <li>Traveling</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
