
import Image from "next/image"
import styles from "./popUp.module.css"
export default function Popup({setpopup}:popupProp){
    return(
        <div className={styles.popupContainer}>
            <div className={styles.bg}>
                <Image
                    className={styles.img}
                    src="/artist/Gurnaam Bhullar (2).png"
                    alt="startnight"
                    width={1414}
                    height={2000}
                />
                <div className={styles.cross} onClick={()=>{setpopup(false)}}>
                    <p>X</p>
                </div>
            </div>
        </div>
    )
}