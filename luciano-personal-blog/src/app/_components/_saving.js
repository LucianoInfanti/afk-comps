"use client";

import style from "./page.module.css";
import Link from "next/link";
import { FixedSizeList } from "react-window";
import { motion } from "framer-motion";
import Data from "../Data/Data.json";
import TextReveal from "./TextReveal";

const Row = ({ index, style }) => {
  const item = Data[index % Data.length];
  return (
    <motion.li
      style={style}
      className={style.list_item}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Link href={`/writing/${item.slug}`}>{item.title}</Link>
    </motion.li>
  );
};

export default function Page() {
  return (
    <FixedSizeList
      className={style.list_wrapper}
      height={window.innerHeight}
      itemCount={Infinity}
      itemSize={120}
    >
      {Row}
    </FixedSizeList>
  );
}
