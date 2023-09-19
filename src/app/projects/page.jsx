import Proyecto from "../../../components/Proyecto"
import styles from "../../../styles/Proyectos.module.css"

export async function getProjects() {
  const response = await fetch(`${process.env.API_URL}/proyectos?populate=*`, { cache: 'force-cache' })
  const respuesta = await response.json()
  return respuesta.data
}

export const metadata = {
  title: "| Proyectos",
};

const Projects = async() => {
  const proyectos = await getProjects()

  return (
    <div className={styles.container}>
      <div className={styles.titulo}>Proyectos</div>
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto.attributes}/>
      ))}
    </div>
  )
}

export default Projects