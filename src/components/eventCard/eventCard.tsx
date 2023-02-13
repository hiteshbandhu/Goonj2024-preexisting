import Image from "next/image"

import styles from  "./eventCard.module.scss"
export default function eventCard({src,alt,width,height}:eventCardProp){
    return(
        <div className={styles.container}>
            <div className={styles.imgSection}>
                <Image
                className={styles.img}
                src={src}
                alt={alt}
                width={width}
                height={height}
                />
            </div>
            <div className={styles.details}>
                <p>{alt}</p>
            </div>
        </div>
    )
}