import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import styles from "../styles/niq.module.css"
import Marque from "@/components/marque/marque";
export default function Niq(){
    return (
        <>
          <Head>
            <title>Goonj 2023 | NIQ</title>
            <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            {/* <Marque/> */}
           <header>
              <Navbar  color={"#2C4938"} />
           </header>
           <Image 
           className={styles.bgimg}
           src="/theme3.png"
           alt="bggreen"
           width={1920}
           height={1080}
           />
           <div className={styles.top}></div>
           <div className={styles.content}>

           <h2 className={styles.heading}>Goonj 2023
            <br />
           NIQ for Infrastructure</h2>
           <a className={styles.form} href="https://bit.ly/3HKl60g" download target="_blank" rel="noreferrer">Download Quotation Form</a>
           </div>
          </main>

        </>
      );
}