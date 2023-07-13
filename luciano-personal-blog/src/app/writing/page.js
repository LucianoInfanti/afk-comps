"use client";
import React, { useState, useEffect } from "react";
import style from "./page.module.css";
import Link from "next/link";
import Data from "../Data/Data.json";
import RevealText from "src/app/_components/TextReveal/TextReveal.js";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

export default function Page() {
  const [list, setList] = useState(Data);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState();
  const [lastHoveredIndex, setLastHoveredIndex] = useState();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let lastMousePosition = { x: 0, y: 0 };
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const elapsed = currentTime - lastTime;
      const dx = e.clientX - lastMousePosition.x;
      const dy = e.clientY - lastMousePosition.y;
      const vx = (dx / elapsed) * 100;
      const vy = (dy / elapsed) * 100;
      setMouseVelocity({ x: vx, y: vy });
      setCoords({ x: e.clientX, y: e.clientY }); // Update coords with current mouse position
      lastTime = currentTime;
      lastMousePosition = { x: e.clientX, y: e.clientY };
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleHover = (index) => {
    setIsHovered(true);
    setLastHoveredIndex(hoveredIndex);
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setIsHovered(false);
    setHoveredIndex();
  };

  return (
    <AnimatePresence>
      <div className={style.page_wrapper}>
        <div className={style.list_wrapper}>
          {list.map((article, index) => (
            <li
              key={article.index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave()}
              className={`${style.list_item} 
               ${hoveredIndex === index && isHovered ? style.link_hovered : ""}
               ${
                 isHovered && hoveredIndex !== index
                   ? style.link_not_hovered
                   : ""
               }
              `}
            >
              <Link href={`/writing/${article.slug}`}>
                <RevealText text={`${article.title}`} />
              </Link>
            </li>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.img
            key={isHovered}
            height={400}
            width={250}
            style={{
              left: coords.x + "px",
              top: coords.y + "px",
              rotate: mouseVelocity.x / 80,
              skewX: mouseVelocity.x / 20,
              skewY: mouseVelocity.y / 20,
              translateX: -125,
              translateY: -200,
            }}
            initial={{
              filter: "blur(16px)",
              scale: "110%",
              opacity: hoveredIndex !== lastHoveredIndex ? "0%" : "100%",
            }}
            animate={{
              filter: "blur(0px)",
              scale: "100%",
              opacity: "100%",
              transition: {
                type: "spring",
                stiffness: 50, // You can adjust this value to get desired inertia
                damping: 10, // You can adjust this value to get desired inertia
              },
            }}
            exit={{
              filter: "blur(32px)",
              scale: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className={style.cover_img}
            alt={`Image from post ${hoveredIndex}`}
            src={`/Images/(posts)/${hoveredIndex}/${hoveredIndex}.png`}
          />
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
