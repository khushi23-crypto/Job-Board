"use client";
import React from "react";
import styles from "./solution.module.css";

const solutionLinks = [
  { name: "Workforce Development", href: "#", icon: "👥" },
  { name: "Work-Based Learning Programs", href: "#", icon: "🏫" },
  { name: "Project-Based Internships", href: "#", icon: "📝" }
];

const Solution: React.FC = () => (
  <aside className={styles.solutionPanel}>
    <h2 className={styles.solutionTitle}><u>Solutions</u></h2>
    <ul className={styles.solutionList}>
      {solutionLinks.map(link => (
        <li key={link.name}>
          <div className={styles.solutionBlock}>
            <span style={{ fontSize: "1.5rem" }}>{link.icon}</span>
            <a href={link.href} className={styles.solutionLink}>
              {link.name}
            </a>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);

export default Solution;