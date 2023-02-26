import Head from "next/head";
import Image from "next/image";
import AboutUs from "@/components/about/aboutUs";
import Navbar from "@/components/navbar/navbar";
import styles from "../styles/about.module.scss"

export default function About(){
    return (
        <>
          <Head>
            <title>Goonj 2023 | About</title>
            <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
           <header>
              <Navbar/>
           </header>
           <div className={styles.top}>
            <Image
            className={styles.img}
            src="/theme1.png"
            alt="theme"
            width={1892}
            height={628}
            />
            <div className={styles.line}></div>
           </div>
          </main>
           <AboutUs />
        </>
      );
}