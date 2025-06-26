"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./nav.module.css";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Browse Jobs", href: "#" },
  { name: "Pages", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <motion.div
        className={styles.logo}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <span className={styles.logoIcon}>💼</span>
        <span className={styles.logoText}>JobBoard</span>
      </motion.div>

      {/* Hamburger for mobile */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </div>

      {/* Center Nav Links */}
      <motion.ul
        className={styles.navLinks}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
      >
        {navLinks.map((link, idx) => (
          <motion.li
            key={link.name}
            whileHover={{ scale: 1.08, color: "#2563eb" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href={link.href}>{link.name}</a>
            {idx === 1 && (
              <motion.span
                className={styles.hotBadge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                HOT
              </motion.span>
            )}
          </motion.li>
        ))}
      </motion.ul>

      {/* Right Side Buttons */}
      <motion.div
        className={styles.actions}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.postJobBtn}>
          <span className={styles.plusIcon}>＋</span> Post a Job
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {navLinks.map((link, idx) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.name}
                  {idx === 1 && (
                    <span className={styles.hotBadge}>HOT</span>
                  )}
                </a>
              </li>
            ))}
            <li>
              <button className={styles.loginBtn} onClick={() => setMenuOpen(false)}>
                Login
              </button>
            </li>
            <li>
              <button className={styles.postJobBtn} onClick={() => setMenuOpen(false)}>
                <span className={styles.plusIcon}>＋</span> Post a Job
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
