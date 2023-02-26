import Image from "next/image"
import styles from "./marque.module.scss"
export default function Marque(){
    return (
        <div className={styles.container}>
            <marquee scrollAmount={8} scrollDelay={60}>

            <Image
            src="/sponsors/Untitled design (13).png"
            alt="decathon"
            width={100}
            height={100}
            />
            <Image
            src="/sponsors/Untitled design (14).png"
            alt="decathon"
            width={100}
            height={100}
            />
            </marquee>
        </div>
    )
}