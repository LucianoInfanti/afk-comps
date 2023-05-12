import styles from './dropdown.module.css'

const dropdown = ({ children, label, placeholder }) => {

  return (
	<div className={styles.wrapper}>
		<div className={styles.label}>{label}</div>
		<div className={styles.placeholder}>{placeholder}</div>

	</div>
  )
}

export default dropdown