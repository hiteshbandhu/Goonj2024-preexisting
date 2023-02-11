import Image from "next/image"

import styles from "./aboutUs.module.scss"
export default function AboutUs(){
    return(
        <div className={styles.container}>
            <h3>About UIET</h3>
            <div className={styles.line}></div>
            <div className={styles.uiet}>
                <p>The University Institute of Engineering and Technology was established in 2002 and is an in-campus Department of Panjab University, Chandigarh. The institute has maintained a high standard in technical education. The well-qualified faculty is the backbone of the institute. University Institute of Engineering & Technology (UIET) is a institute of Panjab University which has prospered by leaps & bounds over the years achieving great academic heights besides foraying into the top 50 engineering colleges in the country. UIET offers 06 Undergraduate (B.E.) courses, 09 Postgraduate (M.E./M.Tech. degree) courses, and Doctoral courses in all constituent fields being pursued. Many Post Graduate candidates with national scholarships join this Institute. UIET has the unique distinction of having been awarded TEQIP-II and TEQIP-III, DIC, DBT-Builder Grant, and Feast Grant by the Government of India, besides funding of a large number of research projects and consultancy projects. The faculty of UIET have many patents to their credit, besides many others already applied in the pipeline.</p>
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
                One of the oldest Universities in India, the Panjab University (PU) initiated at Lahore in 1882, has a long tradition of pursuing excellence in teaching and research in science and technology, humanities, social sciences, performing arts and sports. The University supports excellence and innovation in academic programmes, promotes excellence in research, scholarship and teaching.In independent India, Panjab University with its Campus at Chandigarh and nearly two hundred colleges in Punjab state and Chandigarh U.T., has served various societal needs with distinction. The glorious traditions of the University established during the period of more than 133 years of its long service to the nation since its inception are a source of inspiration for the present generation of faculty members and students. By virtue of its history, experience, achievements and philosophy, the Panjab University has a national character and it enjoys an international stature drawing both faculty and students from all over the country and different parts of the globe. Its faculty includes some of the most distinguished scientists and academicians. It continues to attract celebrated scholars at the campus. Over the years, the reputation of the Panjab University has grown to emerge as an institution at the pinnacle in innovative teaching, research and community outreach. 
                </p>
                <Image 
                className={styles.puimg}
                src="/About/2020_9$largeimg_1357578.jpg"
                alt="PU"
                width={700}
                height={479}
                />
            </div>
            <h3>About Goonj</h3>
            <div className={styles.line}></div>
            <div className={styles.goonj}>
                <p>
                Goonj is the annual Techno-Cultural fest of University Institute of
                Engineering and Technology (UIET) is going to be organised by the students
                of the University. The spirit of the fest is to promote the cultural as well as the technical alacrity among the students. Moreover, the motive is to spread a zeal among students relieving them from the stressful schedule of an engineering atmosphere.
                <br />
                <br />
                Goonj 2023 is well said to be the flagship event of UIET, and is now going
                to be more prestigious and fun filled.
                <br />
                <br />
                The event will include Coding Competitions, Mini Marathon, an E-Sports
                Tournament, Cultural Performances, Fun Activities, Games, Fashion
                Show, EDM Night and STAR Night.
                The event will be hosting more than 10,000 people (approx.) over the
                span of 3 days, including the students from Panjab University as well as
                from other colleges.
                The reach of the event will be to 80,000 students belonging to Panjab
                University and other well-known institutes of tricity.
                Goonj 2023 has active Instagram and Facebook accounts allowing us to
                reach a large number of audiences.
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
        </div>
    )
}