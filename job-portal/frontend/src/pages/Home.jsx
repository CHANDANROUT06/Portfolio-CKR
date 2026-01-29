import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Find Your Dream Job with HireHub</h1>
        <p>
          Browse thousands of jobs from top companies and apply in one click.
        </p>

        <div className="hero-buttons">
          <Link to="/jobs" className="btn primary">
            Browse Jobs
          </Link>
          <Link to="/login" className="btn secondary">
            Login
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>💼 Verified Jobs</h3>
          <p>Only genuine jobs from trusted companies.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Quick Apply</h3>
          <p>Apply to jobs in less than 30 seconds.</p>
        </div>

        <div className="feature-card">
          <h3>📊 Track Applications</h3>
          <p>Manage all your applied jobs in one dashboard.</p>
        </div>
      </section>
    </div>
  );
}
