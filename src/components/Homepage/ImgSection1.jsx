import { useRef, useState } from "react";
import { useScroll, useTransform, motion, easeInOut } from "framer-motion";
import { Link } from "react-router-dom";


const porftfolioVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
            delay: 0.3
        }
    }
}
const porftfolioImgVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }

}

const ImgSection1 = ({ img1Variant, img1WrappersVariant, descPartsVariant, descVariant }) => {
    const ref1 = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref1, offset: ["start end", "end end"] });
    const imgY = useTransform(scrollYProgress, [0.65, 1], ["0vh", "80vh"]);
    const scrollImgOpacity = useTransform(scrollYProgress, [0.65, 1], [1, 0.03]);

    const [isHoveringImg1, setIsHoveringImg1] = useState(false);

    return (
        <motion.section className="first-photo" ref={ref1}>
            <motion.div className="img-wrapper img1-hp-wrapper" viewport={{ once: true }} variants={descVariant} initial="hidden" whileInView="visible">
                <Link>
                    <motion.div className="img-protector img1-hp" >
                        <motion.div variants={img1WrappersVariant} initial="hidden" whileInView="visible" >
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>


                        </motion.div>
                        <motion.div variants={img1WrappersVariant} initial="hidden" whileInView="visible" >
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </Link>

            </motion.div>
            <motion.div className="img-wrapper img1-2-hp-wrapper">
                <motion.div style={{ y: imgY, opacity: scrollImgOpacity }} className="allegeria-img1-wrapper-wrapper" >
                    {isHoveringImg1&&(<div className="hoverTxt1"><h3>Alegría</h3><p>Cirque du Soleil</p></div>)}
                    <motion.div  onMouseOver={() => { setIsHoveringImg1(true); }} onMouseOut={() => { setIsHoveringImg1(false); }} whileHover={{ opacity: 0.2 }} className="allegeria-img1-wrapper"  >

                        <img className="allegeria-img1" src="https://ucace3d09a1db998d7b9ffc9a355.previews.dropboxusercontent.com/p/thumb/AB3yW1qeikDltrqDJDM3Mj2HPnIZlaL8uCSkp4PIKB7t3SG37ZjiznAjLDGXr7Lsbr8BK5zsVr2a9EW6eg6cfPSJy4dveQsHxQnlWe5fn3sMewsJn0Wd3YdqOAN8-VrvdUbE0HV89AkzfciiJGAXwzGbLE_3i8FhhcvoWYQlVAl_t_CQLVqFlWFA6fu4hN3FgvDRHW5ziey_Qjt_h5cgf0V1KSnzB0Oga865XDpXVJBjYJbgSY6IPhPcG0LE4-IIlF87dZ4uNb5nN40lPcrn1_wvoy2BDMrKU4nwcPSov1BQY8PEXtkgQPSQMZyicXq_OTk-C19R0Fe6jT_-eozD5Nzz62nGeE3jvNu1u7nXe6_j7TvFQGYiOzMkAVFzqvzSRvN7CVlsuzjBD5Jkd5s1n4jkagaiwpKJZeonlrBhupjpQEgNzEmt3BnceHXN4AkHxrjhITXLHIAlEcKtB9zHNQT_vNx0kTNBKQQiKA7_bQIcP1tal0JVBxEzwpcg62eeKfsfE9BeMUN5-JB8ZIqfpSjLcAuqOCrlyRj2QhAjESipKKXKQzTGvyv56dO3HAg0XE4AmXL-dhAfrvi8aG2daz0SIAQ3JWVznGeGrUZLgK6t9c-x-nI-cO0QT6mAKuA3heDDUiUM3_ix6buDmC7xpjY3u3B-3YIm_kmxR3bbDxDnR542Uszx2JPOnZ_w-sHbAPUUiy3OujWygtUByyghdORnluN7ejOwCzaHfsetnOPODU-oMKx-KGwVRuBdAHEgvsl518oJKU6uiQl5hhJ6SWfx7CSJ2Q_cGE3BxW7F26_elCRFg8Zs_gfx64UZLSA5b5o/p.jpeg" />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className="pic-description pic-desc-1" >
                <motion.div className="pic-desc-wrapper pic-desc-wrapper1" variants={descVariant} initial="hidden" whileInView="visible">
                    <motion.h1 variants={descPartsVariant}>PORTRAITS</motion.h1>
                    <motion.p variants={descPartsVariant}>
                        Introducing my passion for capturing the essence of people and portraits through photography.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                        As a professional, I create captivating and timeless images that tell a story, whether it's a candid moment or a carefully curated scene.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                        Discover more of my work and photography services by clicking the link below.
                    </motion.p>

                    <Link to="/portfolio"><motion.p variants={descPartsVariant}>Check out more</motion.p></Link>
                </motion.div>

                <motion.div className="portfolio-showcase1" viewport={{ once: true }} variants={porftfolioVariant} initial="hidden" whileInView="visible" >
                    <motion.div variants={porftfolioImgVariant} viewport={{ once: true }} className="img-wrapper-portfolio-showcase1">
                        <div className="porfolio-img-protector1">
                            <img className="portrait-showcase-img1" src="https://ucc508aa67ea73aad5e091db744f.previews.dropboxusercontent.com/p/thumb/AB2v3lczn_g-REYitt8JplQnfZcTcZwq2XtRPBv1MT-zzoklLHd_SUO_DImOQ8y0lHLn08K3TmjqK010qsM0sUWT2SgyCj6tNTETt4q7uLM_Mw5TQEu6lMvQaJOYhBQ41ZfKrdNBu09q1UEckZquZx1RGXnbFb5LbN-36N1H-fEsnachgAcJvkM2y0XsF7c67SIougrpXT5zAs101mLts5bIP2xsAVHyOVjeBH6pKbITsMUF8Gg-OzC_q9svSGzkvyUu5JjvpbE3STuMK4GZ-glLEwcctiwsNbQNrjVa2X7a5_xllUgC8uoq4zYyBDsd2hV6gO5LCpkFcxUnPQ1Q0NAczoxyvSom3lHzYZgHhn0vi-vo3GOfQHHDe--GBwgG4cA/p.jpeg" />
                        </div>
                    </motion.div>
                    <motion.div variants={porftfolioImgVariant}  viewport={{ once: true }}className="img-wrapper-portfolio-showcase1">
                        <div className="porfolio-img-protector1">
                            <img className="portrait-showcase-img1" src="https://uc2e3adae241be4c6fa3aa541539.previews.dropboxusercontent.com/p/thumb/AB2bN2WCdA4H3__9rlgl_htMQ-lUHiCoGSU1WT4XwcOVvE5WmZvNandv4MKPDuI0C1Fcfpwpmxf-2Q0g5xB23sGWk6wkQc5Z5klfmx5tQcD5zrYzkL1VpybxMvBI4W_mR-Z9SJ0OMzgOE9968Y27i2golv6zV3-j_fZLATCKgLagCAQmcrWKj_ZdGHEReG_Hdzjg10IctGmUIM2mrOK_4qXHe-wJO1ji6DJRqweAneDZCKB-lDVfqXE9EVHOYgeuH2dgY58AN9EDjRO6ipUY8JYc6vsSaUcJTSElMRVL6Z9V0RQSG5iLU-n0siJVnoqxtj9ZwbZTgEjybM9EBKQ3LrZBfDaO50eSAdvWNUMrSIPJx-VVCfT9w7C9frPlyCIOf9nAE1k6f4icyhFtXw49Zrgg36apf2VL8GWGc3jY6es0SCTaBZMnLM9GLP_U0_bAK_A_W8jUpL3GZYZJ0jGjPdDWvgvbB89D64b74KmrRCRAKi5kuCnLasLsKzOSgwqwXD0/p.jpeg" />
                        </div>
                    </motion.div>
                    <motion.div variants={porftfolioImgVariant}  viewport={{ once: true }}className="img-wrapper-portfolio-showcase1">
                        <div className="porfolio-img-protector1">
                            <img className="portrait-showcase-img1" src="https://ucc14dc6776b0c9ef0b044398972.previews.dropboxusercontent.com/p/thumb/AB3m4t6rfmE_6_B2gfzN1Y5h8FgyxIOgBObV6lBLAwXWZ0MYgWaT9w8VYMeOQVkgYaMx88WcEBYNMK5wyV7d5k5ZCEIHZk348uhEB7idiebTK-vL9uMkRKUVWJR0pchKHoEiIzcKsrQCuSqxy6TrdwD59z0SON_G0qRmMt-5BYP7RGwdrWgBvutvUXaWR4h8XGmqHQLPm5ewqYbwQDduuApc7tjD3u75ySe_2_vF0tsn4W64VYLb8v2cKbohCqNdelVbwtH03Ok8fFgTRpk1yQLzuUNNkLvw9wWXsksEalvePXo3GhMYGGzf0zfW2H0LV75t9KAyAVRVVGcvPlUqhCvW4fxDTh92aGOwAFnmy4xqOQPflV_ua94CN1ckE4Fxy9Y/p.jpeg" />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

        </motion.section>
    )
}

export default ImgSection1;