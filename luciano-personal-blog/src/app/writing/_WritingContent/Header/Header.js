"use client";

import TextReveal from "@/app/_components/TextReveal/TextReveal";
import Data from "@/app/Data/Data.json";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header({ description }) {
  // Defining what article
  const index = Data.findIndex(
    (obj) => obj.slug === usePathname().substring(9)
  );

  const ref = useRef(null);

  // Setting Parallax
  const [initialY, setInitialY] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(
    scrollY,
    [initialY, initialY + 400],
    [initialY, initialY - 400]
  );

  // Title Blur
  const blurValue = useTransform(scrollY, [initialY, initialY + 400], [0, 12]);
  const [blur, setBlur] = useState("0px");

  useEffect(() => {
    const unsubscribe = blurValue.onChange((v) => {
      setBlur(`${v}px`);
    });
    return unsubscribe;
  }, [blurValue]);

  useEffect(() => {
    if (ref.current) {
      setInitialY(ref.current.getBoundingClientRect().top);
    }
  }, [ref]);

  return (
    <header>
      <div className={styles.headerWrapper}>
        <div
          className={styles.title_wrapper}
          style={{ filter: `blur(${blur})` }}
        >
          <motion.span className={styles.title}>
            <TextReveal text={`${Data[index].title}`} />
          </motion.span>
          <span className={styles.date}>
            <TextReveal text={`${"Published —"} ${Data[index].date}`} />
          </span>
        </div>
        <motion.div
          height={600}
          width={450}
          initial={{ scale: "130%", y: "150%", filter: "blur(40px)" }}
          animate={{ scale: "100%", y: "0%", filter: "blur(0px)" }}
          transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
          className={styles.cover_img}
          style={{ y: y1 }}
        >
          <motion.img
            alt={`Cover Image`}
            src={`/Images/(posts)/${index}/${index}.png`}
          />
          <span className={styles.description}>{description}</span>
        </motion.div>
      </div>
    </header>
  );
}
