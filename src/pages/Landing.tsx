import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  return (
    <>
      <NavBar />

      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>AisyBallus</h1>
          <p>AI-powered syllabus building for modern lecturers.</p>

          <div className="hero-cta">            
            <Link to="/signup" className="btn outline">
                     Get Started
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-inner">
          <h2>About Us</h2>
          <p>
            AisyBallus uses state-of-the-art language models to turn course
            goals and time-frames into publish-ready syllabi—saving lecturers
            hours of prep work.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Data-driven</h3>
              <p>
                Trains on thousands of accredited curricula to suggest optimal
                topic sequences.
              </p>
            </div>
            <div className="about-card">
              <h3>Fully Customizable</h3>
              <p>
                Re-generate or tweak any week, objective, assessment or reading
                list.
              </p>
            </div>
            <div className="about-card">
              <h3>Export Anywhere</h3>
              <p>
                One-click export to DOCX, PDF, or your LMS (Canvas, Moodle,
                Blackboard, …).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-inner">
          <h2>What We Offer</h2>

          <ul className="service-list">
            <li>
              <span className="service-title">AI Syllabus Generator</span>
              <span>Create a 14-week syllabus in under 60 seconds.</span>
            </li>
            <li>
              <span className="service-title">Outcome Alignment</span>
              <span>
                Map every activity and assessment to Bloom’s taxonomy levels.
              </span>
            </li>
            <li>
              <span className="service-title">Collaboration Mode</span>
              <span>
                Invite teaching assistants to comment and suggest edits in
                real-time.
              </span>
            </li>
            <li>
              <span className="service-title">Analytics Dashboard</span>
              <span>
                Track time-on-topic, assessment balance and workload
                distribution.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-inner">
          <h2>Contact Us</h2>
          <p>Have questions? We’d love to hear from you.</p>

          <div className="contact-grid">
            <div>
              <strong>Email:</strong> support@aisyballus.io
            </div>
            <div>
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div>
              <strong>Address:</strong> 42 EduTech Way, Boston MA 02115
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ──────────────────────────────────────────── */

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">
        <img src="/logo192.png" alt="AisyBallus logo" />
        <span>AisyBallus</span>
      </a>

      <ul className="nav-links">
        <li>
          <a href= "#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-actions">
        <Link to="/login" className="btn small outline">
          Login
        </Link>
        <Link to="/signup" className="btn small solid">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} AisyBallus • AI Syllabus Builder for
        Lecturers
      </p>
    </footer>
  );
}
