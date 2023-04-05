import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";

import styles from "../styles/sponsers.module.scss"

export default function Sponsers(){
  const size=150
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
           <div className={styles.sponsors}>
            <h3>Education Partner</h3>
            <Image 
            className={styles.white}
            src="/sponsors/EDCOSMO LOGO.png"
            alt="Edcosmo"
            width={size}
            height={size}
            />
            <h3>Sporting Partner</h3>
            <Image 
            className={styles.white}
            src="/sponsors/Untitled design (13).png"
            alt="Decathlon"
            width={size}
            height={size}
            />
            <h3>Radio Partner</h3>
            <Image 
            className={styles.white}
            src="/sponsors/Untitled design (14).png"
            alt="MyFM"
            width={size}
            height={size}
            />
           <div className={styles.sps}>
            <a href="https://bit.ly/3Yujgba" download>Download Marketing Brochure</a>
           </div>
           </div>
          </main>
        </>
      );
}