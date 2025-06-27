"use client";
import React from "react";
import styles from "./resource.module.css";

const resources = [
  { name: "Blog", href: "#", icon: "📝" },
  { name: "Wall of love", href: "#", icon: "❤️" },
  { name: "JoB Search Academy", href: "#", icon: "🎓" },
  { name: "Events & Webinars", href: "#", icon: "📅" },
  { name: "Annual Impact Report", href: "#", icon: "📊" }
];

const Resource: React.FC = () => (
  <aside className={styles.resourcesPanel}>
    <h2 className={styles.resourcesTitle}><u>Resources</u></h2>
    <ul className={styles.resourcesList}>
      {resources.map((resource) => (
        <li key={resource.name}>
          <div className={styles.resourceBlock}>
            <span style={{ fontSize: "1.5rem" }}>{resource.icon}</span>
            <a href={resource.href} className={styles.resourcesLink}>
              {resource.name}
            </a>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);

export default Resource;