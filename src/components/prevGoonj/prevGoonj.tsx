import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import YouTube from "react-youtube";
import {pastEvent, pastArtist} from "../../data/pastEvents"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./prevGoonj.module.scss"
import EventTile from "../eventTile/eventTile";
gsap.registerPlugin(ScrollTrigger)
export default function PrevGoonj({refer}:prevGoonjProp){
    const ref =useRef<HTMLDivElement>(null)
    const bg =useRef<HTMLDivElement>(null)
    useLayoutEffect(()=>{
        const ctx= gsap.context(()=>{
            const tl=gsap.timeline({
                scrollTrigger:{
                    trigger:ref.current,
                    start:"top 90%",
                    end:"top 60%",
                    scrub:1,
                    // markers:true,
                }
            })
            tl.to("#scrollDown",{opacity:0},0)
            tl.to(bg.current,{backgroundColor:"rgba(0,0,0,.7)"},0)
            tl.to("#dancers",{opacity:0},0)
            tl.to("#dancers1",{opacity:0},0)
            tl.to("#dancers2",{opacity:0},0)
            tl.to("#tagLine", {opacity:0},0)
        },[refer]);
        return () => {
            ctx.revert();
            ScrollTrigger.killAll()
        }
    },[refer,ref])

    return(
        <div className={styles.container} ref={bg} >
            <div className={styles.first}>
                <h1 id="trig" ref={ref}>Welcome to Goonj <br /> 2K23</h1>

                <p>
                Goonj is the annual Techno-Cultural fest of University Institute of
                Engineering and Technology (UIET) is going to be organised by the students
                of the University. The spirit of the fest is to promote the cultural as well as the technical alacrity among the students. Moreover, the motive is to spread a zeal among students relieving them from the stressful schedule of an engineering atmosphere.
                </p>
                <h2>The theme for Goonj 2023 is</h2>
                <div className={styles.videoContainer} >
                    <iframe  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Goonj 2k23 - Theme Release" src="https://www.youtube.com/embed/dpB7sXgNDfs?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=3" id="widget4" allowFullScreen className={styles.video}></iframe>
                </div>
                <h2>Past Events</h2>
                <div className={styles.pastEvents}>
                    {pastEvent.map((event,index)=>{
                        return <EventTile {...event} key={index} />
                    })}
                </div>

                <h2>Star Night</h2>
                <div className={styles.pastArtists}>
                    {pastArtist.map((artist,index)=>{
                        return <EventTile {...artist} key={index} />
                    })}
                </div>

            </div>
            <p>Goonj, UIET PU CHD</p>
        </div>
    )
}