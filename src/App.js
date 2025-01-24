import React from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I’m Archana, an aspiring data scientist passionate about creating
          impactful projects and solving complex problems through technology.
        </p>
      </header>

      <nav className="App-nav">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="about" className="App-section">
          <h2>About Me</h2>
          <p>
          I am a passionate and dedicated B.Tech student specializing in Artificial Intelligence and Data Science. With a strong foundation in machine learning, data analysis, and software development, I aim to leverage technology to solve real-world problems. I am continuously learning and exploring new tools and frameworks, with a focus on data-driven solutions and backend development.
          I enjoy exploring innovative technologies and using my skills to
            contribute to impactful initiatives.

          </p>
          
        </section>

        <section id="projects" className="App-section">
          <h2>Projects</h2>
          <div className="project-card">
            <h3>1. Virtual Coffee Machine</h3>
            <p>
              Built a machine learning-powered virtual coffee machine for
              conference submissions. The project showcases how ML can enhance
              interactive user experiences.
            </p>
          </div>
          <div className="project-card">
            <h3>2. E-Voting Platform</h3>
            <p>
              Developed a secure and user-friendly e-voting system. This project
              leverages maps for better visualization and smooth navigation.
            </p>
          </div>
          <div className="project-card">
            <h3>3. Customer Segmentation Analysis</h3>
            <p>
              Conducted customer segmentation using the K-Means algorithm.
              Presented insights through visual dashboards created in Tableau.
            </p>
          </div>
        </section>

        <section id="skills" className="App-section">
          <h2>Skills</h2>
          <ul>
            <li>Programming Languages: Python, JavaScript</li>
            <li>Frameworks & Libraries: React, TensorFlow, Pandas</li>
            <li>Data Visualization: Tableau, Power BI</li>
            <li>Machine Learning: Supervised and Unsupervised Algorithms</li>
            <li>Tools: Git, Docker, Jupyter Notebook</li>
          </ul>
        </section>

        <section id="contact" className="App-section">
          <h2>Contact Me</h2>
          <p>
            <strong>Email:</strong> archana@210305.com
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/archana-s-b41a0129a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/in/archana</a>
          </p>
          <p>
            <strong>GitHub:</strong> <a href="https://github.com/archanas-21">github.com/archana</a>
          </p>
        </section>
      </main>

      <footer className="App-footer">
        <p>
          &copy; 2025 Archana’s Portfolio. Built with React and a passion for
          learning.
        </p>
      </footer>
    </div>
  );
}

export default App;
