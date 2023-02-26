import Head from "next/head";
import Image from "next/image";

import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import styles from "@/styles/Home.module.scss";
import Popup from "@/components/popUp/popUp";
import PrevGoonj from "@/components/prevGoonj/prevGoonj";
import { useRef, useState } from "react";
import Marque from "@/components/marque/marque";
export default function Home() {
  const ref=useRef<HTMLDivElement>(null)
  const [popup,setPopup]=useState<boolean>(true);
  return (
    <>
      <Head>
        <title>Goonj 2023</title>
        <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} ref={ref}>
        <Marque/>
        {popup && <Popup setpopup={setPopup} />}
        <Image
        id="stage"
        className={styles.bgImg}
        src="/8117254_2092.jpg"
        alt="background"
        width={6000}
        height={3000}
        />
       <header>
          <Navbar color={"#a02a91"}/>
       </header>
       <Hero/>
      </main>
       <PrevGoonj refer={ref}/>
    </>
  );
}
