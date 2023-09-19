import Proyecto from "../../../components/Proyecto"
import styles from "../../../styles/Proyectos.module.css"

export async function getProjects() {
  const response = await fetch(`${process.env.API_URL}/proyectos.json` , { cache: 'no-store' })
  const respuesta = await response.json()
  console.log(respuesta)
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