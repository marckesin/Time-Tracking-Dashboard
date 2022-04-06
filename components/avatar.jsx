import Image from "next/image";
import styles from "../styles/Home.module.css";

// User avatar
export default function Avatar() {
  return (
    <div className={styles.avatar}>
      <Image src="/image-jeremy.png" alt="User image" width={75} height={75} />
    </div>
  );
}
