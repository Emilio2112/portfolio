import Image from "next/image";
import styles from "../styles/Carousel.module.css";

export async function getTecnologias() {
  try {
    const response = await fetch("https://emilio2112.github.io/data/tecnologias.json", {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error("No se pudo obtener el JSON de tecnologías");
    }

    const resultado = await response.json();
    
    const lista = resultado.data || resultado; 
    
    return Array.isArray(lista) 
      ? lista.filter(item => item?.attributes?.nombre) 
      : [];

  } catch (error) {
    console.error("Error en el carrusel:", error);
    return [];
  }
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
