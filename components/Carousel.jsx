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
        {tecnologias.map((tecnologia) => {
          // CONTROL DE SEGURIDAD PARA LA URL DE LA IMAGEN
          // Intenta buscar el formato viejo de Strapi, y si no existe, busca la URL directa del JSON
          const imgUrl = tecnologia?.attributes?.imagen?.data?.attributes?.url 
            || tecnologia?.attributes?.imagen?.url 
            || "/images/avatar.jpg";

          return (
            <div key={tecnologia?.attributes?.nombre || Math.random()} className={styles.imagen}>
              <img
                height={100}
                width={100}
                src={imgUrl}
                alt={tecnologia?.attributes?.nombre || "Tecnología"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;