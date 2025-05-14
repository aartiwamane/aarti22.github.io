import React from 'react';

const Projects = () => (
  <section className="section projects">
    <h2>Projects</h2>
    <ul>
      <li><strong>Auth Guard Implementation Using Angular</strong> – About
This Angular project demonstrates the use of Auth Guards for route protection, 
ensuring only authenticated users can access secure pages. It features token-based
 authentication, an HTTP interceptor for managing tokens, and is optimized for Server-Side 
 Rendering
 (SSR) with the modern fetch API for improved performance and compatibility.</li><br></br>
      <li><strong>Restaurant Managment Application</strong> – Restaurant management system 
      Application built using Angular and JSON Server. It allows users to perform CRUD operations
       on restaurant data. The application fetches and manages data from a db.json file which acts 
       as a server in this project. This Application uses Dummy Server For providing essentials to 
       frontend without needing express.</li>
    </ul>
  </section>
);

export default Projects;
