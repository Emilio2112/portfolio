'use client'; // ¡IMPORTANTE! Esto mueve la carga del servidor al navegador

import { useState, useEffect } from 'react';
import styles from "../styles/Carousel.module.css";

export default function Carousel() {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    fetch("https://emilio2112.github.io/data/tecnologias.json")
      .then(res => res.json())
      .then(data => {
        const lista = data.data || data;
        setTecnologias(Array.isArray(lista) ? lista : []);
      })
      .catch(err => console.error("Error al cargar:", err));
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.contenedor}>
        {tecnologias.map((tec, i) => (
          <div key={i} className={styles.imagen}>
            <img
              src={tec?.attributes?.imagen?.url || tec?.attributes?.imagen?.data?.attributes?.url || ""}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}