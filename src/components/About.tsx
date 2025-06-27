"use client";
import React from "react";
import styles from "./about.module.css";

const aboutLinks = [
  { name: "Our Story", href: "#", icon: "📖" },
  { name: "News", href: "#", icon: "📰" },
  { name: "Careers", href: "#", icon: "💼" },
  { name: "Contact Us", href: "#", icon: "✉️" }
];

const About: React.FC = () => (
  <aside className={styles.aboutPanel}>
    <h2 className={styles.aboutTitle}><u>About</u></h2>
    <ul className={styles.aboutList}>
      {aboutLinks.map(link => (
        <li key={link.name}>
          <div className={styles.aboutBlock}>
            <span style={{ fontSize: "1.5rem" }}>{link.icon}</span>
            <a href={link.href} className={styles.aboutLink}>
              {link.name}
            </a>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);

export default About;