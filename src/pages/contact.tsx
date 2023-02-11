import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import {Faculty,OC,SC} from "../data/contact"
import styles from "../styles/contact.module.scss"
import { useState } from "react";
import Profile from "@/components/profile/profile";

export default function Contact(){
    const [type,setType]=useState<string>("Faculty")
    return (
        <>
          <Head>
            <title>Goonj 2023 | Contacts</title>
            <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
           <header>
              <Navbar/>
           </header>
            <Image 
            className={styles.img}
            src="/theme2.png"
            alt="theme"
            width={1892}
            height={628}
            />
           <div className={styles.top}>
           </div>
           <nav className={styles.contactNav}>
            <ul>
              <li onClick={()=>setType("Faculty")}>Faculty</li>
              <li onClick={()=>setType("OC")}>Organizing Team</li>
              <li onClick={()=>setType("SC")}>Sponsorship Committee</li>
            </ul>
           </nav>
              {
                type=="Faculty" && <div className={styles.faculty}>
                  {Faculty.map((fac,idx)=>{
                    return <Profile {...fac}  key={idx}/>
                  })}
                </div>
              }
              {
                type=="OC" && <div className={styles.OC}>
                  {OC.map((fac,idx)=>{
                    return <Profile {...fac}  key={idx}/>
                  })}
                </div>
              }
              {
                type=="SC" && <div className={styles.SC}>
                  {SC.map((fac,idx)=>{
                    return <Profile {...fac}  key={idx}/>
                  })}
                </div>
              }
          </main>
        </>
      );
}