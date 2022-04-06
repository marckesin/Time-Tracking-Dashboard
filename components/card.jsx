import styles from "../styles/Home.module.css";

// Card component
export default function Card({ hours, text1, text2 }) {
  return (
    <div className={styles.borderPadding}>
      <p className={styles.text1}>{text1}</p>
      <h2 className={styles.hours}>{hours}hrs</h2>
      <p className={styles.text2}>Last week - {text2}hrs</p>
    </div>
  );
}
