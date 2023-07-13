"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import style from "./Paragraph.module.css";

export const Paragraph = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: { opacity: 1, y: 5 },
    hidden: { opacity: 0 },
  };

  return (
    <div>
      <motion.p
        className={style.wrapper}
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }}
        ref={ref}
      >
        {children}
      </motion.p>
    </div>
  );
};
