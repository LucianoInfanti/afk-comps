import style from "./Code.module.css";

export const Code = ({ children }) => {
  return <span className={style.wrapper}>{children}</span>;
};
