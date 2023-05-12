"use Client";

import styles from "./dropdown.module.css";
import { useEffect, useState } from "react";

const dropdown = ({ multiple, value, alt, options, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className={styles.wrapper}
    >
      <div className={styles.content}>
        <div className={styles.label}>{name}</div>
        <div className={styles.placeholder}>
          {multiple ? (
            Array.isArray(value) &&
            value.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className={styles.badge}
              >
                <img
                  src={`/Images/FactionIcon/${v?.label}.png`}
                  alt={alt}
                  width={24}
                  height={24}
                />
                <span className={styles["remove-btn"]}>&times;</span>
              </button>
            ))
          ) : (
            <img
              src={`/Images/FactionIcon/${value?.label}.png`}
              alt={alt}
              width={24}
              height={24}
            />
          )}
        </div>
      </div>

      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles["clear-btn"]}
        >
          &times;
        </button>
        <button className={styles.caret}>↓</button>
      </div>

      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`
					${styles.option} 
					${isOptionSelected(option) ? styles.selected : ""} 
					${index === highlightedIndex ? styles.highlighted : ""}
				`}
          >
            <img
              src={`/Images/FactionIcon/${option?.value}.png`}
              alt={alt}
              width={24}
              height={24}
            />
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default dropdown;
