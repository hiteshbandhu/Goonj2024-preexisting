import Head from "next/head";
import Image from "next/image";

import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import styles from "@/styles/Home.module.scss";
import PrevGoonj from "@/components/prevGoonj/prevGoonj";
import { useRef } from "react";
export default function Home() {
  const ref=useRef<HTMLDivElement>(null)
  return (
    <>
      <Head>
        <title>Goonj 2023</title>
        <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} ref={ref}>
        <Image
        id="stage"
        className={styles.bgImg}
        src="/8117254_2092.jpg"
        alt="background"
        width={6000}
        height={3000}
        />
       <header>
          <Navbar/>
       </header>
       <Hero/>
      </main>
       <PrevGoonj refer={ref}/>
    </>
  );
}
