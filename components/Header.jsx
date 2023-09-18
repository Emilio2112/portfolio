'use client'

import styles from "../styles/Header.module.css"
import Link from "next/link"
import {usePathname} from "next/navigation"

const Header = () => {

  const router = usePathname()

  return (
    <div className={styles.header}>
        <div className={styles.titulo}>
            Emilio Casado
        </div>
        <nav className={styles.navegacion}>

                <Link className={router === "/" ? styles.active  : styles.enlace} href={"/"}>INICIO</Link>
                <Link className={router === "/about" ? styles.active  : styles.enlace} href={"/about"}>SOBRE MI</Link>
                <Link className={router === "/projects" ? styles.active  : styles.enlace} href={"/projects"}>PROYECTOS</Link>
                <Link className={router === "/contact" ? styles.active  : styles.enlace} href={"/contact"}>CONTACTO</Link>

        </nav>
    </div>
  )
}

export default Header