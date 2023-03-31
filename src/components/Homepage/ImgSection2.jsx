import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImgSection2 = ({bigImgVariant, descPartsVariant, descVariant}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target:ref, offset: ["start center", "end end"]});
    const imgY = useTransform(scrollYProgress, [0.2,0.5], ["-30vh","0vh"]);
    const scrollImgOpacity = useTransform(scrollYProgress, [0.3,0.5], [1,0.03]);
    const imgY2 = useTransform(scrollYProgress, [0.5,1], ["-10vh","20vh"]);
    const scrollImgOpacity2 = useTransform(scrollYProgress, [0.5,1], [1,0]);
    return(
        <motion.section className="second-photo" ref={ref}>
                <motion.div className="img-wrapper img2-hp-wrapper"  style={{y:imgY, opacity:scrollImgOpacity}} variants={descVariant} initial="hidden" whileInView="visible" viewport={{  once: true  }} >
                    <Link>
                        <motion.div className="img-protector img2-hp" >
                            <motion.img variants={bigImgVariant} src="https://uc05e9bf1fe89a5769771807cc63.previews.dropboxusercontent.com/p/thumb/AB2pm7_OHSXANT5VA_x43Ys6H46EeGIYTZyFeCnGAr1bwRRQtZ2Q299InHoMK2MqdJJhf2kG8sExQzaiAYXPI9IpbxdVUjOsJQKLZq40XVxvy8HQv472v8yOSG1JI01F9NVj5eJveAce3aDNhBoCDiY4_Kp4vbCtLxPGInaZDdE7OzWd_f6qfZETOcoMC6WUzjUM3eY9tueG3yg4aMZ2hJaYKn-6B3l5ja_iEzGW4RdL6aqrLeYZuM5GL--XabTo7tQ2bJv8FHmAkqRywkDkBPflBEB90zn-LJBiBKJ1JiKcNQAItWpF3MiBK3nBecEatNR5oUi0bybs49PxzSRKXUbsYnhBW4vrotvd4ECw9wqfr6MwuNBZeVLIF1OqbBj6vokw-xhIibbZc6xa-kXVspvL/p.jpeg" />
                        </motion.div>
                    </Link>

                </motion.div>
                <motion.div className="pic-description pic-desc-2" variants={descVariant} initial="hidden" whileInView="visible">
                    <motion.h1 variants={descPartsVariant}>Photography taken in America and Canada</motion.h1>
                    <motion.p variants={descPartsVariant}>
                        Welcome to my photography portfolio showcasing the beauty of America's diverse landscapes and cityscapes.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                        Join me on a journey through the United States as I capture the essence and emotions of each unique
                        destination.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                        Come discover the breathtaking scenery that awaits.
                    </motion.p>

                    <Link to="/portfolio"><motion.p variants={descPartsVariant}>Check out more</motion.p></Link>


                </motion.div>
                <motion.div className="img-wrapper img2-hp-wrapper"  style={{y:imgY2, opacity:scrollImgOpacity2}} variants={descVariant} initial="hidden" whileInView="visible" viewport={{  once: true  }} >
                    <Link>
                        <motion.div className="img-protector img2-hp" >
                            <motion.img variants={bigImgVariant} src="https://uc22e38e358251777d2a42212fa5.previews.dropboxusercontent.com/p/thumb/AB0DgFw5S5C0d1UBQd2k14FMl4UwgXMAVlo3YUcCS7OSRxIQuogeO7yyEmO4xT9WwMJQRyCN1hKI75p22UZCov3UDPx-INpHAkNh-_Vv-JoYQr7TQnR2H-BJYxkO3q7nMAoP7Hv-IlM47zvLfEW-EyYtRskgx3m7P-Fgmb4h6jyrIXszFezfzTFnRj0Taefj38LTXefVMrs1UfEz2upArbtDrsKvucAL-xjlvMVhDztafewNuI3d4Rkoe0gzT_GA4k_9T17RWk-Jvhrvj7fehXEywJLIxXLf52T_p4axzE6GgXoDOA-Wmdd7HacfJoWc1JLVc_C12VEaQb_IZiRqm3LFDAJE7_TksrtwSOo43WJ23nkbk8gZ64Doc-1cp4uyww0/p.jpeg" />
                        </motion.div>
                    </Link>

                </motion.div>
                

            </motion.section>
    )
}

export default ImgSection2;