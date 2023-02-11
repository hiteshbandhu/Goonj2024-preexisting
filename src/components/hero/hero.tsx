import Image from "next/image"
import styles from "./hero.module.scss"
import Dancers from "../dancers/dancers"

export default function Hero(){
    const tagSize=200;
    return(
        <div className={styles.container}>
            <Image 
            id="tagLine"
            className={styles.tagLine}
            src="/tagline.png"
            alt="TagLine"
            width={tagSize*2.25}
            height={tagSize}
            />
            {/* <Dancers /> */}
            <p className={styles.scrollDown} id="scrollDown">Scroll Down</p>
        </div>
    )
}