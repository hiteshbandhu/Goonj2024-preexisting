import Head from "next/head";
import Image from "next/image";

import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import styles from "@/styles/Home.module.css";
import Popup from "@/components/popUp/popUp";
import PrevGoonj from "@/components/prevGoonj/prevGoonj";
import { useRef, useState } from "react";
import Marque from "@/components/marque/marque";
export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [popup, setPopup] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>Goonj 2024</title>
        <meta name="Goonj" content="Goonj 2024, UIET,PU CHD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} ref={ref}>
        {/* <Marque/> */}
        {/* {popup && <Popup setpopup={setPopup} />} */}
        <img
          id="stage"
          className={styles.bgImg}
          src="https://firebasestorage.googleapis.com/v0/b/goonj-2k24.appspot.com/o/back-asset_dark.jpg?alt=media&token=c703457c-da78-497c-a217-3d15a456855a"
          alt="background"
        />
        <header>
          <Navbar color={"#00203E"} />
        </header>
        <Hero />
      </main>
      <PrevGoonj refer={ref} />
    </>
  );
}
