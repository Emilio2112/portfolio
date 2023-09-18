import Empleos from "../../../components/Empleos";
import styles from "../../../styles/About.module.css";

export async function getTrabajos() {
  const response = await fetch(`${process.env.API_URL}/trabajos`);
  const trabajos = await response.json();
  return trabajos.data;
}

export const metadata = {
  title: "| Sobre mí",
};

const About = async () => {
  const trabajos = await getTrabajos();
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Sobre mi...</h1>
      <div className={styles.descripcion}>
        <p>
          Tras formarme como administrativo contable, he desarrollado una
          carrera con gran experiencia en atención al cliente. He desarrollado
          esta función en distintos sectores, ampliando los conocimientos como
          la reparación de dispositivos móviles, atendiendo reclamaciones o
          supervisando un call center.
          </p>
          <p>
            Actualmente he decidido renovar mi carrera
          profesional hacia el desarrollo web. He realizado un Bootcamp de
          desarrollador Full Stack con <a className={styles.link} href="https://reboot.academy/">Reboot Academy</a>. Esta formación me ha
          permitido realizar mis propios proyectos de web apps.
        </p>
      </div>
      <div>
        <h1 className={styles.titulo}>Formación</h1>
        <div className={styles.formacion}>
          <h2 className={styles.subtitulo}>
            Bootcam desarrollo web full-stack & mobile
          </h2>
          <p>
            <a className={styles.link}  href="https://reboot.academy/">Reboot Academy</a>
          </p>
          <p>Finalizado: Diciembre - 2022</p>
        </div>
        <div className={styles.formacion}>
          <h2 className={styles.subtitulo}>
            C.F.G.S. Administración y Finanzas
          </h2>
          <p>Escuela Comarcal Arzobispo Morcillo</p>
          <p>Finalizado: Junio - 2001</p>
        </div>
        <div className={styles.formacion}>
          <h2 className={styles.subtitulo}>EOI Las Palmas de GC</h2>
          <p>Cursando: Inglés B2</p>
        </div>
      </div>
        <h1 className={styles.titulo}>Experiencia laboral</h1>
        <div className={styles.empleos}>
        {trabajos.map((trabajo) => (
          <Empleos key={trabajo.id} trabajo={trabajo.attributes} />
        ))}
        </div>
    </div>
  );
};

export default About;
