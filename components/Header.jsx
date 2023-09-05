import styles from "../styles/Header.module.css"
import Link from "next/link"

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.titulo}>
            Emilio Casado
        </div>
        <nav className={styles.navegacion}>

                <Link className={styles.enlace} href={"/"}>INICIO</Link>
                <Link className={styles.enlace} href={"/about"}>SOBRE MI</Link>
                <Link className={styles.enlace} href={"/projects"}>PROYECTOS</Link>
                <Link className={styles.enlace} href={"/contact"}>CONTACTO</Link>

        </nav>
    </div>
  )
}

export default Header