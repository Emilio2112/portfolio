'use client'
import styles from "../styles/Empleos.module.css"



const Empleos = ({trabajo}) => {
    const {empresa, puesto, inicio, final, descripcion} = trabajo

  return (
    <div className={styles.container}>
        <h1 className={styles.empresa}>{empresa}</h1>
        <h2 className={styles.puesto}>{puesto}</h2>
        <p className={styles.fecha}>{inicio}</p>
        <p className={styles.fecha}>{final}</p>
        <p className={styles.descripcion}>{descripcion}</p>
    </div>
  )
}

export default Empleos