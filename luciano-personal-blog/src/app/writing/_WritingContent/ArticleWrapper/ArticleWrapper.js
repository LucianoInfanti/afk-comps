"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ArticleWrapper.module.css";

export const ArticleWrapper = ({ children }) => {
  const ref = useRef(null);

  // Setting Parallax
  const [initialY, setInitialY] = useState(0);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const y1 = useTransform(
    scrollY,
    [initialY, initialY + 400],
    [initialY, initialY - 400]
  );

  useEffect(() => {
    if (ref.current) {
      setInitialY(ref.current.getBoundingClientRect().top);
    }
  }, [ref]);

  return (
    <>
      <div style={{ height: '80px' }}></div>
      <motion.div className={styles.wrapper} style={{ y: y1 }}>
        {children}
      </motion.div>
    </>
  );
};
