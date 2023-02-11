import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import styles from "../styles/artist.module.scss"
export default function Artist(){


    return (
        <>
          <Head>
            <title>Goonj 2023 | Artist</title>
            <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <header>
              <Navbar color={"#AD0000"}/>
            </header>
            <div className={styles.artist}>
                <h2>GURNAM BHULLAR</h2>
                <div className={styles.media}>

                <video src="/artist/05b87024-0021-4890-bbf4-b64b2d8f6dc2.mov" className={styles.vid} controls></video>
                <Image
                className={styles.img}
                src="/artist/19nov_2.png"
                alt="gurnam bullar"
                width={1080}
                height={1080}
                />
                </div>
                <p>More coming soon</p>
            </div>
          </main>
        </>
      );
}