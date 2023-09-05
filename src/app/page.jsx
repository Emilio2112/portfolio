import Image from 'next/image'
import styles from '../../styles/Inicio.module.css'
import Carousel from '../../components/Carousel'

export default async function Home() {

  return (
    <div>
    <div className={styles.intro}>
      <div className={styles.presentacion}>
        <label>
          Full Stack Developer
        </label>
        <ul>
          <li>Front-End</li>
          <li>Back-End</li>
          <li>Ux-Ui</li>
        </ul>
        <div className={styles.tecnologias}>
        </div>
      </div>
      <Image className={styles.image} width={500} height={500} src="/images/toon.jpg" alt='toon'></Image>
    </div>
    <Carousel />
    </div>
  )
}
