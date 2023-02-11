import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";

import styles from "../styles/sponsers.module.scss"

export default function Sponsers(){
    return (
        <>
          <Head>
            <title>Goonj 2023 | Sponsers</title>
            <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
           <header>
              <Navbar/>
           </header>
           <Image
           className={styles.bg}
           src="/theme.png"
           alt="theme"
           width={1920}
           height={1080}
           />
           <div className={styles.tplayer}></div>
           <div className={styles.sps}>
            <p>Whant to sponsor us?</p>
            <a href="/Marketing Brochure - GOONJ 2023.pdf" download>Details Here</a>
           </div>
           <div className={styles.sponsors}>
            <h2>Title Sponsor</h2>
            <p>Coming Soon</p>
            <h2>Co-Sponsor</h2>
            <p>Coming Soon</p>
            <h3>Education Partner</h3>
            <p>Coming Soon</p>
            <h3>Sporting Partner</h3>
            <p>Coming Soon</p>
            <h3>Health & Wellness Partner</h3>
            <p>Coming Soon</p>
            <h3>Logistic Partner</h3>
            <p>Coming Soon</p>
            <h3>Travel Partner</h3>
            <p>Coming Soon</p>
            <h3>Media Partner</h3>
            <p>Coming Soon</p>
            <h3>Sound Partner</h3>
            <p>Coming Soon</p>
            <h3>Fitness Partner</h3>
            <p>Coming Soon</p>
            <h3>Event Partner</h3>
            <p>Coming Soon</p>
            <h3>Miscellaneous</h3>
            <p>Coming Soon</p>
           </div>
          </main>
        </>
      );
}