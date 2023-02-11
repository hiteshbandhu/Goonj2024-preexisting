import Head from "next/head";

import Navbar from "@/components/navbar/navbar";
import styles from "../styles/accommodation.module.scss"
export default function Accommodation(){
    return (
        <>
          <Head>
            <title>Goonj 2023 | Accommodation</title>
            <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
           <header>
              <Navbar/>
           </header>
           <h2>Updating Soon</h2>
          </main>

        </>
      );
}