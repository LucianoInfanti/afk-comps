"use client";
import { useState, useEffect } from "react";
import style from "./TextReveal.module.css";

const TextReveal = ({ text }) => {
  return (
    <div className={style.wrapper}>
    
      {text.match(/./gu)?.map((char, index) => (
        <span
          className={style.span}
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default TextReveal;
