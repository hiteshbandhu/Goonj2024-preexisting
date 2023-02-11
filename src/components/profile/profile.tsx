import Image from "next/image"

import styles from "./profile.module.scss"
export default function Profile({src,alt,contact,des,email}:profileProp){
    return(
        <div className={styles.container}>
            <Image 
                className={styles.img}
                src={src}
                alt={alt}
                width={75}
                height={75}
            />
            <p className={styles.name}>{alt}</p>
            <p>{des}</p>
            { contact!="" &&<p>{contact}</p>}
            {email!="" &&<p>@ : {email}</p>}
        </div>
    )
}