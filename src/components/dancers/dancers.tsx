import Image from "next/image"
import styles from "./dancers.module.scss"
export default function Dancers(){
    return(
        <div style={{position:"fixed", top:"40%"}}>
        <Image
        id="dancers"
        className={styles.vectDance}
        src="/anime-dance-unscreen.png"
        alt="vectorDance"
        width={100}
        height={200}
        />
        <Image
        id="dancers1"
        className={styles.vectDance2}
        src="/818b5a45b6058acc5ccb0f23233a75-unscreen.png"
        alt="vectorDance2"
        width={200}
        height={200}
        />
        <Image
        id="dancers2"
        className={styles.vectDance1}
        src="/Cute-Anime-Girl-Dance-GIF-min-unscreen.png"
        alt="vectorDance1"
        width={350}
        height={250}
        />
        </div>
    )
}