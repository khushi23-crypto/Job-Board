"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./footer.module.css";
import scrollStyles from "./scroll.module.css";

const featureItems = [
  "1000+ Jobs Posted",
  "Verified Employers",
  "Career Guidance",
  "Resume Builder",
  "Interview Prep",
  "24/7 Support",
  "Remote & Onsite",
  "Internships Available"
];

const Footer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer className={styles.footer}>
      {/* Feature Bar */}
      <div ref={ref} className={styles.footerFeatureBar}>
        <motion.div
          className={scrollStyles.scrollTrack}
          initial={{ x: "100%" }}
          animate={inView ? { x: 0 } : { x: "100%" }}
          transition={{ type: "spring", stiffness: 40, damping: 12, duration: 1.2 }}
        >
          {featureItems.map((item, idx) => (
            <span key={idx} className={scrollStyles.feature}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* About */}
          <div className={styles.footerCol}>
            <div className={styles.brand}>
              <span className={styles.logoIcon}>💼</span>
              <span className={styles.logoText}>JobBoard</span>
            </div>
            <p className={styles.aboutText}>
              JobBoard helps you find your dream job, connect with top employers, and grow your career. Start your journey with us!
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com" className={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://twitter.com" className={styles.socialIcon} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="https://linkedin.com" className={styles.socialIcon} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 12.268h-3v-5.604c0-1.337-.025-3.062-1.867-3.062-1.868 0-2.154 1.459-2.154 2.967v5.699h-3v-11h2.881v1.501h.041c.401-.761 1.379-1.563 2.841-1.563 3.041 0 3.603 2.003 3.603 4.605v6.457z"/></svg>
              </a>
              <a href="https://instagram.com" className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Companies</a></li>
              <li><a href="#">Career Advice</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div className={styles.footerCol}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Resume Tips</a></li>
              <li><a href="#">Interview Prep</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul>
              <li>Email: <a href="mailto:support@jobboard.com">support@jobboard.com</a></li>
              <li>Phone: <a href="tel:+1234567890">+1 234 567 890</a></li>
              <li><a href="#">Contact Form</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <span>&copy; {new Date().getFullYear()} JobBoard. All rights reserved.</span>
          <span>
            Made with <span style={{ color: "red" }}>♥</span> by Your Team
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;