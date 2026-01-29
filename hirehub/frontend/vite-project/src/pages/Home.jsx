import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Find the Right Job. <br /> Build Your Career.
          </h1>
          <p>
            HireHub connects talented professionals with companies looking
            for real skills.
          </p>

          <div className="hero-buttons">
            <Link to="/jobs" className="btn primary">
              Browse Jobs
            </Link>
            <Link to="/post-job" className="btn secondary">
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose HireHub?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Verified Jobs</h3>
            <p>
              Every job posted is reviewed to ensure authenticity
              and quality.
            </p>
          </div>

          <div className="feature-card">
            <h3>Easy Applications</h3>
            <p>
              Apply to jobs in one click and track your applications
              in your dashboard.
            </p>
          </div>

          <div className="feature-card">
            <h3>Recruiter Friendly</h3>
            <p>
              Recruiters can post jobs, manage applicants, and
              shortlist candidates easily.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <h3>1K+</h3>
          <p>Active Jobs</p>
        </div>
        <div className="stat">
          <h3>500+</h3>
          <p>Companies</p>
        </div>
        <div className="stat">
          <h3>10K+</h3>
          <p>Job Seekers</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Create an account and start your journey today.</p>
        <Link to="/login" className="btn primary">
          Get Started
        </Link>
      </section>
    </div>
  );
}
