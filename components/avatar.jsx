import Image from "next/image";
import styles from "../styles/Home.module.css";

// User avatar component
export default function Avatar() {
  return (
    <div className={styles.avatar}>
      <Image src="/image-jeremy.png" alt="User image" width={65} height={65} />
    </div>
  );
}
