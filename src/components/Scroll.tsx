"use client";
import React from "react";
import styles from "./scroll.module.css";
import { motion } from "framer-motion";

const features = [
  "Remote Friendly Jobs",
  "Verified Employers",
  "One-Click Apply",
  "Personalized Job Alerts",
  "Easy Resume Upload",
  "Real-Time Notifications",
  "Advanced Search Filters",
  "Company Reviews",
];

const Scroll: React.FC = () => {
  return (
    <div className={styles.scrollWrapper}>
      <motion.div
        className={styles.scrollTrack}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
      >
        {[...features, ...features].map((feature, idx) => (
          <span className={styles.feature} key={idx}>
            {feature}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Scroll;