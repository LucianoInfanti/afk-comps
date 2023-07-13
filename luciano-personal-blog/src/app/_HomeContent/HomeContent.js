"use client";
import TextReveal from "../_components/TextReveal/TextReveal";
import styles from "./HomeContent.module.css";
import { motion } from "framer-motion";

const HomeContent = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.05, 0.7, 0.1, 1.0],
        duration: 3,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.05, 0.7, 0.1, 1.0], duration: 3 },
    },
  };
  return (
    <motion.div
      key="indexWrapper"
      exit={{
      
        opacity: 0,
        ease: [0.2, 0.0, 0, 1.0],
        transition: { duration: 0.6 },
      }}
    >
      <div className={styles.Wrapper}>
        <div className={styles.spline}></div>
        <motion.div
          className={styles.mainContent}
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          key="mainContent"
        >
          <motion.p
            className={styles.firstRow_wrapper}
            variants={childVariants}
            key="first"
          >
            <span className={styles.word_wrapper}><TextReveal text={"Drawing"} /></span>
            <span className={styles.word_wrapper}><TextReveal text={"rectangles"} /></span>
            <span className={styles.word_wrapper}><TextReveal text={"by"} /></span>
            <span className={styles.word_wrapper}><TextReveal text={"day."} /></span>
            <span className={styles.word_wrapper}><TextReveal text={"Coding"} /></span>
            <span className={styles.word_wrapper}><TextReveal text={"by"} /></span>
            <span className={styles.word_wrapper}><TextReveal text={"night."} /></span>
          </motion.p>
          <motion.div
            variants={childVariants}
            key="second"
            className={styles.secondRow}
          >
              <span className={styles.word_wrapper}><TextReveal text={"Currently"} /></span>
              <span className={styles.word_wrapper}><TextReveal text={"at"} /></span>
            <a
              className={styles.mainContantLink}
              href="https://work.co/"
              target="_blank"
            >
              <TextReveal text={"Work & Co."} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomeContent;
