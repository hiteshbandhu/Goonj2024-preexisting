import Image from "next/image"
import styles from "./marque.module.scss"
export default function Marque(){
    const size =70;
    return (
        <div className={styles.container}>
            <div className={styles.move}>

            <Image
            className={styles.white}
            src="/sponsors/Untitled design (13).png"
            alt="decathlon"
            width={size}
            height={size}
            />
            <Image
            className={styles.white}
            src="/sponsors/Untitled design (14).png"
            alt="myfm"
            width={size}
            height={size}
            />
            <Image
            className={styles.white}
            src="/sponsors/EDCOSMO LOGO.png"
            alt="edcosmo"
            width={size}
            height={size}
            />
            </div>
        </div>
    )
}