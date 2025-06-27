"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Resource from "./Resource";
import About from "./About";
import Solution from "./Solution";
import styles from "./FeatureSidebar.module.css";

const features = [
  { name: "FuturePath", icon: "🚀", logo: "/logos/futurepath.png" },
  { name: "Level UP", icon: "⬆️", logo: "/logos/levelup.svg" },
  { name: "Advance Ontario", icon: "🌎", logo: "/logos/advanceontario.png" },
  { name: "Ascent UP", icon: "🏔️", logo: "/logos/ascentup.png" },
  { name: "EPIC", icon: "⭐", logo: "/logos/epic.png" },
  { name: "CIC", icon: "🤝", logo: "/logos/cic.png" },
  { name: "Tech Talent Boost", icon: "💻", logo: "/logos/techtalentboost.png" },
  { name: "DTTP", icon: "🌈", logo: "/logos/dttp.png" }
];

// Popup style animation variant
const popupVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.5, type: "spring", bounce: 0.35 }
  })
};

const FeatureSidebar: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.programsLayout}>
      <motion.aside
        className={styles.sidebar}
        custom={0}
        initial="hidden"
        animate="visible"
        variants={popupVariants}
      >
        <h2 className={styles.heading}>Programs</h2>
        <ul className={styles.list}>
          {features.map((feature, idx) => (
            <li
              className={`${styles.item} ${selected === idx ? styles.selected : ""}`}
              key={feature.name}
              onClick={() => setSelected(idx)}
            >
              <span style={{ fontSize: "1.5rem" }}>{feature.icon}</span>
              <span className={styles.name}>{feature.name}</span>
            </li>
          ))}
        </ul>
      </motion.aside>
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={popupVariants}
        style={{ display: "flex", flexDirection: "column", flex: 1 }}
      >
        <Resource />
      </motion.div>
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={popupVariants}
        style={{ display: "flex", flexDirection: "column", flex: 1 }}
      >
        <About />
      </motion.div>
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={popupVariants}
        style={{ display: "flex", flexDirection: "column", flex: 1 }}
      >
        <Solution />
      </motion.div>
    </div>
  );
};

export default FeatureSidebar;
