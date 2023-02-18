
import Image from "next/image"
import styles from "./popUp.module.scss"
export default function Popup({setpopup}:popupProp){
    return(
        <div className={styles.popupContainer}>
            <div className={styles.bg}>
                <Image
                    className={styles.img}
                    src="/artist/19nov_2.png"
                    alt="startnight"
                    width={1080}
                    height={1080}
                />
                <div className={styles.cross} onClick={()=>{setpopup(false)}}>
                    <p>X</p>
                </div>
            </div>
        </div>
    )
}