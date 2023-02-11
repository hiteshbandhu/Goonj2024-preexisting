import Image from "next/image"
import styles from "./eventTile.module.scss"
export default function EventTile({src,alt,title,width,height}:eventTileProp){
    return(
        <div className={styles.container}>
            <Image
            className={styles.img}
            src={src}
            alt={alt}
            width={width}
            height={height}
            />
            <p>{title}</p>
        </div>
    )
}