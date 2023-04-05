import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import styles from "../styles/events.module.scss"
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Marque from "@/components/marque/marque";
import {events} from "../data/events"
import EventCard from "@/components/eventCard/eventCard";
import EventPopup from "@/components/eventPopup/eventPopup";

gsap.registerPlugin(ScrollTrigger)
export default function Events(){
    const ref=useRef<HTMLDivElement>(null);
    const trigger=useRef<HTMLDivElement>(null);
    const [popup, setpopup]=useState<boolean>(false);
    const [event, setEvent]=useState<eventCardProp>(events[0])
    useEffect(()=>{
      const ctx=gsap.context(()=>{
        const tl=gsap.timeline({
          scrollTrigger:{
            trigger:trigger.current,
            start:"start 95%",
            end:"start 75%",
            scrub:1,
            // markers:true
          }
        })
         tl.to('#head',{opacity:0})
         tl.to('#scrollDown',{zIndex:-1},0)
         tl.to('#events',{background:"rgba(0,0,0,.5)"},0)


      },ref)
      return () =>{
        ctx.revert()
        ScrollTrigger.killAll()
      }
    },[ref])
    return (
        <>
          <Head>
            <title>Goonj 2023 | Events</title>
            <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            {/* <Marque /> */}
            <header>
              <Navbar color={"#AD0000"}/>   
            </header>
            <Image
            className={styles.bgred}
            src="/bgred.jpg"
            alt="bgred"
            width={2000}
            height={1143}
            />
            <div ref={ref}>
            {
              popup && <div className={styles.popup}>
                <EventPopup {...event}  setpopup={setpopup}/>
              </div>
            }

            <div>
              <h1 id="head" className={styles.head}>EVENTS</h1>
              <p id="scrollDown" className={styles.scrollDown}>Scroll Down</p>

            </div>
            <div id="events" className={styles.event}>
              <div className={styles.line} ref={trigger}></div>
              {events.map((event,indx)=>{
                return <EventCard {...event} key={indx} setEvent={setEvent} setpopup={setpopup}/>
              })}
            </div>
            </div>
          </main>
        </>
      );
}