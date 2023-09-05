"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../styles/Formulario.module.css"


const Formulario = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_j77dbil", "formulario_contacto", form.current, `iNExz1VxN3av9UCQd`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

  return (
    <div className={styles.container}>
        <form ref={form} onSubmit={handleSubmit}>
            <input type="hidden" name="contact_number"/>
            <label>Nombre:</label>
            <input className={styles.campo} type="text" name="user_name" required/>
            <label>Email:</label>
            <input className={styles.campo} type="email" name="user_email" required/>
            <label>Mensaje:</label>
            <textarea className={styles.campo} name="message" id="" cols="30" rows="10" required></textarea>
            <input className={styles.boton} type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Formulario