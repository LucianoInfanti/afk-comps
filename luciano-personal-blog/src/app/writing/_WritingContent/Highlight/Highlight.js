import styles from "./Highlight.module.css";

const Highlight = ({text}) => {
  return (
	<div className={styles.wrapper}>{text}</div>
  )
}

export default Highlight