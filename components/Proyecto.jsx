import Image from "next/image"
import styles from "../styles/Project.module.css"

const Proyecto = ({proyecto}) => {
    const {nombre, descripcion, url, resumen, imagen} = proyecto

  return (
    <div className={styles.container}>
        <div className={styles.imageinfo}>
        <Image className={styles.imagen} width={800} height={100} src={imagen.data.attributes.url} alt={nombre}></Image>
        <div className={styles.mostrar}>
            <p>{descripcion}</p>
        </div>
        </div>
        <div className={styles.info}>
            <h1 className={nombre}>{nombre}</h1>
            <a href={url} target="_blank">{`Prueba ${nombre}`}</a>
            <p>{resumen}</p>
        </div>
    </div>
  )
}

export default Proyecto