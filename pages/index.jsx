import Avatar from "../components/avatar";
import Footer from "../components/footer";
import Card from "../components/card";
import Head from "next/head";
import data from "../data.json";
import styles from "../styles/Home.module.css";

// Home component to render the landing page
export default function Home() {
  const [work, play, study, exercise, social, selfCare] = data;

  console.log(work);
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Time tracking dashboard</title>
        <meta
          name="description"
          content="This is a solution to the Time tracking dashboard challenge on Frontend Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.grid1}>
            <div className={styles.borderPadding}>
              <Avatar />
              <p className={styles.text2}>Report for</p>
              <h1>Jeremy Robson</h1>
              <ul className={styles.list}>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
              </ul>
            </div>
          </div>
          <div className={styles.grid2}>
            <Card hours={32} text1={data[0].title} text2={36} />
          </div>
          <div className={styles.grid3}>
            <Card hours={32} text1={data[1].title} text2={36} />
          </div>
          <div className={styles.grid4}>
            <Card hours={32} text1={"Work"} text2={36} />
          </div>
          <div className={styles.grid5}>
            <Card hours={32} text1={"Work"} text2={36} />
          </div>
          <div className={styles.grid6}>
            <Card hours={32} text1={"Work"} text2={36} />
          </div>
          <div className={styles.grid7}>
            <Card hours={32} text1={"Work"} text2={36} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
