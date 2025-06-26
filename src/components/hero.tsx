"use client";
import React from "react";
import styles from "./hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Find Your Dream Job Today
        </h1>
        <p className={styles.heroSubtitle}>
          The best place for employers to post jobs and for job seekers to find their next opportunity. Search, apply, and get hired!
        </p>
        <div className={styles.heroSearch}>
          <div className={styles.heroInputWrapper}>
            <span className={styles.searchIcon}>
              {/* SVG search icon */}
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="#2563eb" strokeWidth="2"/>
                <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <input
              type="text"
              className={styles.heroInput}
              placeholder="Search jobs (e.g. React Developer)"
            />
          </div>
          <button className={styles.heroButton}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;