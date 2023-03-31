import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";

const porftfolioVariant = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            staggerChildren: 1,
            delay: 0.4
        }
    }
}
const porftfolioImgVariant = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            duration:1
        }
    }
}

const ImgSection3 = ({bigImgVariant, descPartsVariant, descVariant}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target:ref, offset: ["start end", "end end"]});
    const imgY = useTransform(scrollYProgress, [0.2,1], ["-30vh","80vh"]);
    const scrollImgOpacity = useTransform(scrollYProgress, [0.4,1], [1,0.03]);
    return(
        <motion.section className="third-photo" ref={ref}>
                <motion.div className="img-wrapper img3-hp-wrapper" style={{y:imgY, opacity:scrollImgOpacity}}  variants={descVariant} initial="hidden" whileInView="visible"viewport={{  once: true  }}>
                    <Link>
                        <motion.div className="img-protector img3-hp" >
                            <motion.img variants={bigImgVariant} src="https://uc5e638d2f5569e0baef8bed4eb4.previews.dropboxusercontent.com/p/thumb/AB3NlYB1Cq9sgzzv8qBONLCcT0iT1r2DzfyJ193FSxX_3k_LCcWuLJ82ayxjyvlT226olghksuN5MI6ttXS1GC8-IYeHmZnFF1BQD-vn3lBEP2erefvZUOhat51yrfClWI_Bdbtf8qMloRdhItn4-q4o3y2aZNVj8SU45ZMQZ1jGcwyWyy9lifzaQ4jYiD8UMmGXkab32EvYt960p_9-dFploR8U4qtC9DeK4SSNeXTm4ZSboZz3JJLFIzOTmtBvJGFHPZgfrcFyedEL5e_Vd4Cgm4IDZIySoLSBipmmw2-OMaA01ZReZRNs3LjQllbGfTZeR3W-Rznp7v1l-K00fi_MorEeugom7UEP9xhtD8tbLZV9-vNfBKXBKzsurNVxIY8/p.jpeg" />

                        </motion.div>
                    </Link>

                </motion.div>
                <motion.div className="pic-description pic-desc-3" variants={descVariant} initial="hidden" whileInView="visible">
                    <motion.h1 variants={descPartsVariant}>Photography in Japan</motion.h1>
                    <motion.p variants={descPartsVariant}>
                    Explore the beauty of Japan through my photography. From vibrant cityscapes to serene landscapes,
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                    I capture the essence and mood of each destination I visit.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                    Join me on a journey through this unique country by clicking the link below to see my full portfolio.
                    </motion.p>

                    <Link to="/portfolio"><motion.p variants={descPartsVariant}>Check out more</motion.p></Link>


                </motion.div>
                <motion.div className="img-wrapper portfolio-showcase-wrapper3" variants={porftfolioVariant} initial="hidden" whileInView="visible"  >
               
                        <motion.div variants={ porftfolioImgVariant} className="img-protector portfolio-showcase-img-3-wrapper portfolio-showcase-img-3-wrapper-1" >
                            <motion.img className="portfolio-showcase-img-3 portfolio-showcase-img-3-1" variants={bigImgVariant}
                             src="https://ucdbd7927614fc07e7204653f9a1.previews.dropboxusercontent.com/p/thumb/AB2zktziOT7k4MGtQq3OWnaPb4Orx_tkcigmer2f28iBGMJcn-He41SwPD1_0TBc5vKzmfQEVbOwGQGi2HhCZFu1S1Ex7uBeWKBHIhSJCycyojF8bxIbcq4S8Uyc7Jboa8MV0kN_IVvUbl1bvMXn9xE8WT-Vh_fhEoX15Vy6-fHz98SHJHib1BVjkmESIDbnofTLuAMAYUu1JHK_i-SN4yuHJTAIqa3hKO9f-h-6MZXegKzgdWYOIJnbw_MfM7FLiGHlqxDWN7ZSK3BfuJNTX4FSz3mLWVG5pg_DI0QPOYRghYgNBp-okGMjpgWzqOmOrWHTeEvZg8Sqb7fw3s0kBdg1SL8z_dn9suAXJAdy6KrMPAJxeoVnPRHGegQG1rEdaPVk00i_5MCDLsmCA5yBDOhR0QC1M6nyXhl5xdaMM1V-oVpN3v_SsUyb4CIZRoJHZdyPPk99q1bRr6DHuR-0nQ-Y2IVqwT1wV2NAft4Ie46jGfa7-0DD0QSQ0xmJvm_yGvVfsggGTlxmkRpFX_rT0i-4UWdpB1BvWOp6yiPnEZ759FfaTg1eK1J4WDS28jUbWAQ/p.jpeg" />
                        </motion.div>
              
                        <motion.div variants={ porftfolioImgVariant} className="img-protector portfolio-showcase-img-3-wrapper portfolio-showcase-img-3-wrapper-2" >
                            <motion.img className="portfolio-showcase-img-3 portfolio-showcase-img-3-2" variants={bigImgVariant} 
                            src="https://ucaddf0ac118dcce0d40c4358e06.previews.dropboxusercontent.com/p/thumb/AB0upRsdrTfgcNxHxj0d1UqubeKOD39oc3Euy8mCvY5mIKfPKBk1e1yV98a36OwKxQz7P_77Q1uCbACCgreISJOeD4MoRLLzQFtKVQ4uqaix5aP_D5biz8cmu8SllvTjtmRAqmW9O9KPi58DFjuvcBJ_MkXpBjYejQL7kehiiNIoJU7G_wi4dL2I6vCsISFT_pEKQqSqYTWe215roqFEJQhjl2UaCzMc10FyPBm_KFThySUadxPl1NOcxjs0y7mBrht96-f1tDnUS0DdhxOSf2UqzuM9Zf-QLfHG8_fMRJzpTmNZ4m2zB-aygzqRI31-M4T4CyE6eMdcaayZSmhbslxuysFlEUh11PaUCgXXWWxLgaQszmgoZ5F7R-fuRPPeAuc5PsT1NRzKQJBXsxdCAHwxvKCpxEBteF3P9nvDPUcXJTiMWPuEj1o4d9oJxJoCoKqiZbxXVlJNnMnh4VP4Z6D4tyToTuVmoAA20t0hq1ScuvYHpN9-Xntz8PmYfwDpyyChSzs2oWtmWNYFNVIeNQXHAuLijtYUoMs2_nmI4SZ9Wtii0O89rdQmwHOT4zvtZQ56cbTGl93pG-_iV5iFukfevHjhmev9YUSRM2af2XI-YEdflaB8uo6Ei7TKHrEyH78/p.jpeg" />
                        </motion.div>
                   
                        <motion.div variants={ porftfolioImgVariant} className="img-protector portfolio-showcase-img-3-wrapper portfolio-showcase-img-3-wrapper-3" >
                            <motion.img className="portfolio-showcase-img-3 portfolio-showcase-img-3-3" variants={bigImgVariant} 
                            src="https://uc1d48b44f966e1c5e370af098cb.previews.dropboxusercontent.com/p/thumb/AB3opWxEBF_e1FFqloHBjGOOlYcR3IMmFE3JY4qmDoD9kIR9EXIqj2XQaa7QoNbmDpeY0zjTqjUpi9YL88FohZJwragvLGn09rD_xu-Zn5q-0xBLchbb4H2mYYutxWXo1vdPJI4GUEgVjbX1rt2_-GxG3AsISiWJq11FCab2ixYkl3hkz4PQgKJysDK3F49zl_1uV2QpVBMdO18Oy9WTfMXlSKVugR6NDP787czkuqimOr9PYPDDQuIVl2M_A9lgFExgKFCLmfa-oubgcRKacnD8LnC4gyPyiTv7MSSw_ktqrmm4VVJo_-yfrGGkpBDcQx70pQ2plcz6pUZLlmp1FDy-C9pH4fQsqMzrAmx9prMuZieF1ijeHisqYeXkMuKqsAJAZnL2cKHgEIoszHVcC2pkfwlnW8ycZdei6gcHphMa_AQ8cLiK05nPRuUXICd4doa2UT_MNaXuwwoX9kQSTCDRsBPAsbJD0uvfq064J59yjsLEaVj95NsTjl4-mgTIJd-hr6LsZcuLyBI7bEO8zd3Izxz1i9YJbSQmFcH2NDvX6oLHUyLfCg3I4mC0BWRGEiU/p.jpeg"/>
                        </motion.div>

                </motion.div>

            </motion.section>
    )
}

export default ImgSection3;