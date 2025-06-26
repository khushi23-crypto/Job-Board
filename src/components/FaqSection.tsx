"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./faqSection.module.css";

const faqs = [
  {
    question: "What is Job Search FuturePath?",
    answer: "Job Search FuturePath is a program that connects students with real-world projects and employers for experiential learning."
  },
  {
    question: "What makes Job Search FuturePath different from traditional internships?",
    answer: "FuturePath offers project-based, flexible, and remote opportunities, focusing on measurable results and skill development."
  },
  {
    question: "How do I join Job Search FuturePath?",
    answer: "You can join by applying through our website and selecting projects that match your interests and skills."
  },
  {
    question: "Am I eligible to participate in Job Search FuturePath?",
    answer: "Eligibility depends on your student status and program requirements. Please check our website for details."
  },
  {
    question: "Who can I contact if I have more questions?",
    answer: "You can contact our support team via the contact form on our website."
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, type: "spring" }
  })
};

const rectangleMotion = {
  animate: {
    y: [0, -10, 0, 10, 0],
    boxShadow: [
      "0 8px 32px 0 rgba(37,99,235,0.18)",
      "0 16px 32px 0 rgba(37,99,235,0.12)",
      "0 8px 32px 0 rgba(37,99,235,0.18)",
      "0 0px 32px 0 rgba(37,99,235,0.10)",
      "0 8px 32px 0 rgba(37,99,235,0.18)"
    ],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    }
  }
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.faqMainLayout}>
      {/* Left Side Image */}
      <div className={styles.faqImageSection}>
        <img
          src="/faq2.jpg"
          alt="Job Search Illustration"
          className={styles.faqImage}
        />
      </div>
      {/* Right Side FAQ in Rectangle */}
      <motion.div
        className={styles.faqRectangle}
        animate={rectangleMotion.animate}
      >
        <section className={styles.faqSection}>
          <motion.h2
            className={styles.faqTitle}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            FAQs
          </motion.h2>
          <motion.p
            className={styles.faqSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            Everything you need to know about Job Search FuturePath
          </motion.p>
          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.question}
                className={styles.faqItem}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon}>{openIndex === idx ? "▲" : "▼"}</span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`${styles.faqAnswer} ${openIndex === idx ? styles.open : ""}`}
                >
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default FaqSection;
