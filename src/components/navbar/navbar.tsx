import Image from "next/image"
import Link from "next/link"
import { useEffect,useRef, useState } from "react"
import Observer from "gsap/dist/Observer"
import gsap from "gsap"

import styles from "./navbar.module.scss"

gsap.registerPlugin(Observer)
export default function Navbar(){
    const [showNav,setShowNav]=useState<boolean>(false)
    useEffect(()=>{
        if(window.innerWidth>1024)  setShowNav(true);
    },[showNav])
    const ref=useRef<HTMLDivElement>(null);
    const logoSize=25;
    useEffect(() => {
        const ctx= gsap.context(()=>{
            var animating=false;
            function animate(direction:number){
                animating=true;
                if(direction ==1){
                    gsap.from("#top",{y:-100})
                    gsap.from("#bottom",{y:100})
                }
                else {
                    gsap.to("#top",{y:0})
                    gsap.to("#bottom",{y:0})
                }
                animating=false;
            }
            Observer.create({
                target:window,
                type:"wheel,pointer,touch",
                wheelSpeed:-1,
                tolerance:50,
                dragMinimum:50,
                onDown: () => !animating && animate(0),
                onUp: ()=> !animating && animate(1),
                onChange: (self)=>{
                    // console.log(self.deltaY, animating)
                }
            })
        },ref)
        return ()=>{
            
        }
      }, []);
    
    return(
        <div className={styles.container} ref={ref}>

        <nav className={styles.navContainer} id="top">
            <button className={styles.ham} onClick={()=>setShowNav(!showNav)}>
                {!showNav && <Image 
                src="/logos/menu.png"
                alt="cross"
                width={40}
                height={40}
                />}
                {showNav && <Image 
                src="/logos/cross.png"
                alt="cross"
                width={40}
                height={40}
                />}
            </button>
            {showNav &&
            <ul className={styles.left}>
                <li>
                    <Link  href="https://uiet.puchd.ac.in/" target="_blank">
                        <Image
                        src="/logos/UIET_logo.png"
                        alt="UIET"
                        width={70}
                        height={70}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/events">
                    EVENTS
                    </Link>
                </li>
                <li>
                    <Link href="/artist">
                    ARTISTS
                    </Link>
                </li>
                <li>
                    <Link href="/accommodation">
                    ACCOMMODATION
                    </Link>
                </li>
            </ul>
            }
            <ul className={styles.goonjlogo}>
                <Link href="/">
                    <Image
                    src="/logos/goonj logooo_simple logo4.png"
                    alt="Goonj"
                    width={75}
                    height={75}
                    />
                </Link>
            </ul>

            {showNav && <ul className={styles.right}>
                <li>
                    <Link href="/about">
                        ABOUT US
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        CONTACT US
                    </Link>
                </li>
                <li>
                    <Link href="/sponsers">
                        SPONSORS
                    </Link>
                </li>
                <li>
                    <Link  href="https://puchd.ac.in/" target="_blank">
                        <Image
                        src="/logos/pu-logo.png"
                        alt="UIET"
                        width={70}
                        height={70}
                        />
                    </Link>
                </li>
            </ul>
            }
        </nav>
        <nav className={styles.socials} id="bottom">
            <ul>
                <li>
                    <Link href="">
                        <Image
                        src="/logos/insta.png"
                        alt="Instagram"
                        width={logoSize}
                        height={logoSize}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Image
                        src="/logos/twitter.png"
                        alt="Twitter"
                        width={logoSize*1.25}
                        height={logoSize}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Image
                        src="/logos/fb.png"
                        alt="Facebook"
                        width={logoSize}
                        height={logoSize}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Image
                        src="/logos/yt.png"
                        alt="YouTube"
                        width={logoSize*1.45}
                        height={logoSize}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Image
                        src="/logos/at.png"
                        alt="Email"
                        width={logoSize}
                        height={logoSize}
                        />
                    </Link>
                </li>

            </ul>
        </nav>
        </div>
    )
}