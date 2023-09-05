import Image from "next/image";
import styles from "../styles/Carousel.module.css";

export async function getTecnologias() {
  const response = await fetch(`${process.env.API_URL}/tecnologias?populate=*`);
  const tecnologias = await response.json();
  return tecnologias.data;
}

const Carousel = async () => {
  const tecnologias = await getTecnologias();

  return (
    <div className={styles.carousel}>
      <div className={styles.contenedor}>
        {tecnologias.map((tecnologia) => (
          <div key={tecnologia.attributes.nombre} className={styles.imagen}>
            <Image
              height={100}
              width={100}
              src={tecnologia.attributes.imagen.data.attributes.url}
              alt={tecnologia.attributes.nombre}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
