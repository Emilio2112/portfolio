import Formulario from "../../../components/Formulario"
import styles from "../../../styles/Contacto.module.css"
import Image from "next/image"

export const metadata = {
  title: "| Contacto",
};

const Contacto = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titulo}>Contacto</div>
      <Formulario/>
      <div className={styles.titulo}>Redes</div>
      <div className={styles.redes}>
      <a href="https://github.com/Emilio2112" target="_blank">
                <Image className={styles.logo} width={100} height={100} src="/images/github_color.png" alt="github"></Image>
                </a>
                <a href="mailto:piconto12@gmail.com?Subject=Interesado%20en%20tu%20portfolio" target="_blank">
                <Image className={styles.logo} width={100} height={100} src="/images/email_color.png" alt="github"></Image>
                </a>
                <a href="https://www.linkedin.com/in/emilio-casado/" target="_blank">
                <Image className={styles.logo} width={100} height={100} src="/images/linkedin_color.png" alt="linkedin"></Image>
                </a>
      </div>

    </div>
  )
}

export default Contacto