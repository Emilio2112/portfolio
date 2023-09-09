import Proyecto from "../../../components/Proyecto"
import styles from "../../../styles/Proyectos.module.css"

export async function getProjects() {
  const response = await fetch(`${process.env.API_URL}/proyectos?populate=*`)
  const respuesta = await response.json()
  return respuesta.data
}

const Projects = async() => {
  return (
    <div>Proyectos</div>
  )
}

export default Projects