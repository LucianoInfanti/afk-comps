"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { globalStore } from "../../globalStore";
import RevealText from "../TextReveal/TextReveal.js";

const Navbar = () => {
  const router = useRouter();
  const { hasAnimated, setHasAnimated } = globalStore((state) => state);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  const animationProps = hasAnimated
    ? {}
    : {
        initial: { y: -60 },
        animate: { y: 0 },
        transition: { delay: 0.4, duration: 1, ease: [0.2, 0.0, 0, 1.0] },
        onAnimationComplete: () => setHasAnimated(),
      };

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <motion.div
      {...animationProps}
      className={styles.Wrapper}
      onAnimationComplete={() => setHasAnimated(true)}
    >
      <div className={styles.Logo}>
        <Link href="/">
          <RevealText text={"Luciano Infanti"} />
        </Link>
      </div>

      {!isScrolled && (
        <motion.div style={{ opacity }} className={styles.Links}>
          {usePathname().startsWith("/writing") ? (
            <motion.div
              className={styles.DashActive}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.77, 0, 0.175, 1]
              }}
            ></motion.div>
          ) : (
            <motion.div
              className={styles.DashActive}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.77, 0, 0.175, 1]
              }}
            ></motion.div>
          )}

          <Link href="/writing">
            <RevealText text={"Writing"} />
          </Link>
        </motion.div>
      )}

      <motion.div
        whileHover={{
          scale: 8,
          transition: {ease: [0.77, 0, 0.175, 1], duration: 1 },
        }}
        className={styles.Theme}
      ></motion.div>
    </motion.div>
  );
};

export default Navbar;
