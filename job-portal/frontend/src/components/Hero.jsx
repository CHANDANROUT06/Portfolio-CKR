import React from "react";

function Hero() {
  return (
    <section className="hero">
      <h1>Find your dream job</h1>
      <p>Search from thousands of jobs across India</p>

      <div className="search-box">
        <input type="text" placeholder="Job title or keyword" />
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </div>
    </section>
  );
}

export default Hero;



