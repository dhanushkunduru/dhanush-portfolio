import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <div className="app">
      <div className="particles">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <nav className="navbar">
        <h1 className="logo">Dhanush.dev</h1>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left fade-up">
          <p className="tag">Frontend Developer</p>
          <h2>Hello, I'm</h2>
          <h1>Kunduru Dhanush Reddy</h1>

          <h3 className="typing">
            I build responsive React websites
          </h3>

          <p>
            I create clean, modern and user-friendly web applications using
            HTML, CSS, JavaScript and React.js.
          </p>

          <div className="buttons">
            <a href="https://github.com/dhanushkunduru" target="_blank">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kunduru-dhanush-reddy"
              target="_blank"
            >
              LinkedIn
            </a>

            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-right zoom-in">
          <div className="profile-ring">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <h2>About Me</h2>

        <div className="about-box">
          <div className="about-text glass-card">
            <p>
              Hi, I am <span>Kunduru Dhanush Reddy</span>, a passionate
              Frontend Developer from Visakhapatnam. I enjoy creating clean,
              responsive and user-friendly websites.
            </p>

            <p>
              I love learning new technologies, improving my coding skills and
              building real-time projects. My goal is to become a skilled React
              Frontend Developer.
            </p>

            <p>
              Apart from coding, I enjoy listening to music, watching tech
              videos, exploring new ideas and improving my design sense every
              day.
            </p>
          </div>

          <div className="about-cards">
            <div className="mini-card">💻 <h3>Habit</h3><p>Coding daily</p></div>
            <div className="mini-card">🎧 <h3>Hobby</h3><p>Music and tech videos</p></div>
            <div className="mini-card">🍗 <h3>Favorite Food</h3><p>Biryani and chicken dishes</p></div>
            <div className="mini-card">🚀 <h3>Goal</h3><p>React Frontend Developer</p></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Responsive Design",
            "Context API",
            "Authentication",
            "Protected Routes",
          ].map(skill => (
            <div className="card" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-container">
          <div className="project-card">
            <h3>AuctionX</h3>
            <p>
              Real-time auction platform with authentication, protected routes,
              notifications, live bidding, dark/light mode and responsive UI.
            </p>
            <a href="https://auctionx-ebon.vercel.app" target="_blank">
              Live Project
            </a>
          </div>

          <div className="project-card">
            <h3>Varanasi Tourism</h3>
            <p>
              Responsive tourism website showcasing attractions with smooth
              navigation and clean design.
            </p>
            <a href="https://varanasitourist.ccbp.tech/" target="_blank">
              Live Project
            </a>
          </div>

          <div className="project-card">
            <h3>Food Munch</h3>
            <p>
              Responsive food website with modern sections, clean UI and
              user-friendly layout.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="contact-box glass-card">
          <p>Email: dhanushreddykunduru@gmail.com</p>
          <p>Phone: +91 9490627242</p>
          <p>Instagram: dhanush_kunduru_</p>

          <a className="resume-btn" href="/resume.pdf" download>
            Download My Resume
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Kunduru Dhanush Reddy</p>
      </footer>
    </div>
  );
}

export default App;