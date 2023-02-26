import Image from "next/image"
import styles from "./marque.module.scss"
export default function Marque(){
    const size =80;
    return (
        <div className={styles.container}>
            <div className={styles.move}>

            <Image
            src="/sponsors/Untitled design (13).png"
            alt="decathon"
            width={size}
            height={size}
            />
            <Image
            src="/sponsors/Untitled design (14).png"
            alt="decathon"
            width={size}
            height={size}
            />
            </div>
        </div>
    )
}