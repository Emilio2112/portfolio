import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Footer.module.css"


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.data}>Emilio Casado</div>
            <div className={styles.navigation}>
                <Link className={styles.enlace} href={"/"}>INICIO</Link>
                <Link className={styles.enlace} href={"/about"}>SOBRE MI</Link>
                <Link className={styles.enlace} href={"/projects"}>PROYECTOS</Link>
                <Link className={styles.enlace} href={"/contact"}>CONTACTO</Link>
            </div>
            <div className={styles.social}>
                <a href="https://github.com/Emilio2112" target="_blank">
                <Image className={styles.logo} width={100} height={100} src="/images/github.png" alt="github"></Image>
                </a>
                <a href="mailto:piconto12@gmail.com?Subject=Interesado%20en%20tu%20portfolio" target="_blank">
                <Image className={styles.logo} width={100} height={100} src="/images/email.png" alt="github"></Image>
                </a>
                <a href="https://www.linkedin.com/in/emilio-casado/" target="_blank">
                <Image className={styles.logo} width={100} height={100} src="/images/linkedin.png" alt="linkedin"></Image>
                </a>

            </div>
        </div>
        <div className={styles.info}>
            Web realizada en NextJS 13
        </div>
    </div>
  )
}

export default Footer