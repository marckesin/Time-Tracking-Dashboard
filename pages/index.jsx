import Avatar from "../components/avatar";
import Footer from "../components/footer";
import Card from "../components/card";
import Head from "next/head";
import data from "../data.json";
import styles from "../styles/Home.module.css";
import { useState } from "react";

// Home component to render the landing page
export default function Home() {
  const [period, setPeriod] = useState("daily");
  const periods = ["daily", "weekly", "monthly"];
  const grids = ["grid2", "grid3", "grid4", "grid5", "grid6", "grid7"];
  const [work, play, study, exercise, social, selfCare] = data;

  // Function to handle clicks on periods
  function handleClick(event) {
    setPeriod(event.target.value);
  }
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
            <div className={styles.cardMain}>
              <div className={styles.top}>
                <Avatar />
                <p className={styles.text2}>Report for</p>
                <h1 className={styles.heading}>Jeremy Robson</h1>
              </div>
              <div className={styles.bottom}>
                <div className={styles.periods}>
                  {periods.map((item, index) => (
                    <button
                      key={index}
                      className={
                        period === item ? styles.color1 : styles.color2
                      }
                      value={item}
                      onClick={handleClick}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid2}>
            <Card
              hours={work.timeframes[period].current}
              text1={work.title}
              text2={work.timeframes[period].previous}
            />
          </div>
          <div className={styles.grid3}>
            <Card
              hours={play.timeframes[period].current}
              text1={play.title}
              text2={play.timeframes[period].previous}
            />
          </div>
          <div className={styles.grid4}>
            <Card
              hours={study.timeframes[period].current}
              text1={study.title}
              text2={study.timeframes[period].previous}
            />
          </div>
          <div className={styles.grid5}>
            <Card
              hours={exercise.timeframes[period].current}
              text1={exercise.title}
              text2={exercise.timeframes[period].previous}
            />
          </div>
          <div className={styles.grid6}>
            <Card
              hours={social.timeframes[period].current}
              text1={social.title}
              text2={social.timeframes[period].previous}
            />
          </div>
          <div className={styles.grid7}>
            <Card
              hours={selfCare.timeframes[period].current}
              text1={selfCare.title}
              text2={selfCare.timeframes[period].previous}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
