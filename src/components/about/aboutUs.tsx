import Image from "next/image"

import styles from "./aboutUs.module.scss"
export default function AboutUs(){
    return(
        <div className={styles.container}>
            <h3>About UIET</h3>
            <div className={styles.line}></div>
            <div className={styles.uiet}>
                <p>
                    University Institute of Engineering and Technology (UIET) was established in 2002 and is an in-campus Department of Panjab University, Chandigarh. The whole campus is Wi-Fi enabled. UIET is spread over 10.5 acres of land with lush greenery. It has Three Academic Blocks and one dedicated Workshop. Nearly 2500 students comprise from all parts of the country and a few from Abroad too. UIET has prospered by leaps & bounds over the years achieving great academic heights besides foraying into the top 50 engineering colleges in the country.
                </p>
                <Image 
                    className={styles.uietimg}
                    src="/About/UIET-Chandigarh.webp"
                    width={660}
                    height={330}
                    alt="UIET"
                />
            </div> 
            <h3>About PU</h3>
            <div className={styles.line}></div>
            <div className={styles.pu}>
                <p>
                Panjab University Chandigarh established in 1882 (earlier as University of Punjab) has 78 teaching and research departments at its main campus located in Chandigarh.
                <br />
                <br />
                University campus is spread over an area of 550 acres in sectors 14 and 25 of the city of Chandigarh.
                </p>
                <Image 
                className={styles.puimg}
                src="/About/FBoJfiHUUAIb_Xh.jpg"
                alt="PU"
                width={2048}
                height={1365}
                />
            </div>
            <h3>About Goonj</h3>
            <div className={styles.line}></div>
            <div className={styles.goonj}>
                <p>
                Goonj is the annual Techno-Cultural fest of UIET is organised by the students. The spirit of the fest is to promote the cultural as well as the technical alacrity among the students. Moreover, the motive is to spread a zeal among students relieving them from the stressful schedule of an engineering atmosphere. Goonj 2023 is well said to be the flagship event of UIET, and is now going to be more prestigious and fun filled.
                <br />
                <br />
The event will include Coding Competitions, Mini Marathon, an E-Sports Tournament, Cultural Performances, Fun Activities, Games, Fashion Show, EDM Night and STAR Night. The event will be hosting more than 10,000 people (approx.) over the span of 3 days, including the students from Panjab University as well as from other colleges. The reach of the event will be to 80,000 students belonging to Panjab University and other well-known institutes of tricity. Goonj 2023 has active Instagram and Facebook accounts allowing us to reach a large number of audiences.
                </p>
                <div className={styles.imageContainer}>
                <Image
                    className={styles.img}
                    src="/oldGoonj/flawsome1.png"
                    alt=""
                    width={2610}
                    height={1080}
                />
                <Image 
                className={styles.img}
                src="/oldGoonj/51658548_2390312337908428_4513556160078963249_n.jpg"
                alt="Goonj"
                width={2610}
                height={1080}
                />
                <Image 
                className={styles.img}
                src="/oldGoonj/flawsome.png"
                alt=""
                width={2610}
                height={1080}
                />
                </div>
            </div>
            <h3>News</h3>
            <div className={styles.line}></div>
            <div className={styles.news}>
                <Image
                className={styles.news1} 
                src="/theme release news/WhatsApp Image 2023-02-08 at 1.07.25 PM.jpeg"
                alt="news1"
                width={1145}
                height={1600}
                />
                <Image 
                className={styles.news1} 
                src="/theme release news/WhatsApp Image 2023-02-08 at 1.07.27 PM.jpeg"
                alt="news1"
                width={928}
                height={1600}
                />
                <Image 
                className={styles.news1} 
                src="/star reveal news/WhatsApp Image 2023-02-11 at 10.04.39 AM.jpeg"
                alt="news1"
                width={1184}
                height={1600}
                />
                <Image 
                className={styles.news1} 
                src="/theme release news/WhatsApp Image 2023-02-08 at 1.07.26 PM.jpeg"
                alt="news1"
                width={1076}
                height={799}
                />
                <Image 
                className={styles.news1} 
                src="/theme release news/WhatsApp Image 2023-02-08 at 1.07.28 PM.jpeg"
                alt="news1"
                width={1184}
                height={1600}
                />
                <Image 
                className={styles.news1} 
                src="/star reveal news/WhatsApp Image 2023-02-11 at 10.04.37 AM.jpeg"
                alt="news1"
                width={1184}
                height={1600}
                />
                <Image 
                className={styles.news1} 
                src="/star reveal news/WhatsApp Image 2023-02-11 at 10.04.38 AM.jpeg"
                alt="news1"
                width={1184}
                height={1600}
                />
            </div>
        </div>
    )
}