import style from "./LinkComponent.module.css"

export const LinkComponent = ({ href, text }) => {
  return (
    <span className={style.wrapper}>
      <a href={href} target="_blank">
        {text}
      </a>
    </span>
  );
};
