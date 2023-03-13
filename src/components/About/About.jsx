import React from 'react';
import styles from './About.module.css'




export default function About(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Bienvenidos a mi Proyecto llamado Rick & Morty</h1>

            <p className={styles.containerParrafo}>
                En ésta ocasión los invito a conocer mi proyecto Rick & Morty, es una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013.  La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos.
                Así que prepárate para disfrutar!!!</p>
                <div class={styles.container}>
  <img src="https://www.bing.com/images/blob?bcid=TmahG7VY3VcF6dzTDpyQ1.JR65FW.....wI" alt="Mary" class={styles.image} styles="width:100%"></img>
  <div class={styles.middle}>
    <div class={styles.text}>Hola, mi nombre es María Rosa Fuhr y soy cursante de la carrera Full Stack Developer en Soy Henry!</div>
  </div>
</div>
  
            
        </div>
    )
}