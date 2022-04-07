import styles from "../styles/Home.module.css";

// Card component
export default function Card({ hours, text1, text2 }) {
  return (
    <div className={styles.card}>
      <div className={styles.bottom}>
        <div className={styles.up}>
          <p className={styles.text1}>{text1}</p>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className={styles.down}>
          <h2 className={styles.hours}>{hours}hrs</h2>
          <p className={styles.text2}>Last week - {text2}hrs</p>
        </div>
      </div>
    </div>
  );
}
