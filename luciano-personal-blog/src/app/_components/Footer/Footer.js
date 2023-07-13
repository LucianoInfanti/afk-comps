"use client";
import styles from "./Footer.module.css";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "../TextReveal/TextReveal";

const Footer = () => {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/luciano-infanti/" },
    { label: "Github", href: "https://github.com/LucianoInfanti" },
    { label: "Savee", href: "https://savee.it/lucianoinfanti/" },
    { label: "Read.cv", href: "https://read.cv/lucianoinfanti" },
  ];

  return (
    <footer>
      <AnimatePresence>
        {usePathname() === "/" ? (
          <motion.ul
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: "100%",
              opacity: 0,
              transition: { ease: [0.77, 0, 0.175, 1], duration: 0.2 },
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.77, 0, 0.175, 1],
            }}
            className={styles.wrapper}
          >
            {links.map((link) => (
              <li className={styles.li_wrapper} key={link.href}>
                <a target="_blank" href={link.href}>
                  <RevealText text={link.label}></RevealText>
                </a>
                <span className={styles.comma}>,</span>
              </li>
            ))}
          </motion.ul>
        ) : (
          ""
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
