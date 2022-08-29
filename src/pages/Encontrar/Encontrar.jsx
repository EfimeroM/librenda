import './Encontrar.scss';

import ButtonIG from '../../components/ButtonIG/ButtonIG';
import React from 'react';
import banner from "../../assets/box-multisensorial/banner.png";
import bannerMobile from "../../assets/box-multisensorial/banner-mobile.jpg";
import { useMediaQuery } from "react-responsive";

export const Encontrar = () => {

  const screen = useMediaQuery({ query: "(min-width: 900px)" });
  
  return (
    <div id='sobre-mi'>
      <div className="banner" style={screen ? { backgroundImage: `url("${banner}")` } : { backgroundImage: `url("${bannerMobile}")` }}>
        <div className="content">
          <div className="head">
            <h2 style={screen ? { display: "none" } : { display: "block" }}>
              QUE VAS A ENCONTRAR
            </h2>
          </div>
          <div className="content-animation">
            <h1>Una gran variedad de recomendaciones y propuestas...</h1>
            <p>
              No sigo patrones específicos porque leo lo que necesito en ese momento de mi vida. Por eso, la idea es que encuentres en Librenda una gran variedad de recomendaciones y propuestas para que vos elijas según tu criterio.
            </p>
            <p>
              Es por ello que, Librenda incluye muchos géneros y temáticas tratadas por autores nacionales e internacionales.
            </p>
          </div>
        </div>
      <ButtonIG caption='HACE MATCH CON TU LIBRO'/>
      </div>
      <div>
        <img src=''/>
        <h2>
        Hay tantos gustos como personas y no quisiera limitarte a los míos. Yo no soy fanática de los libros de terror pero igualmente te quiero ayudar a encontrar el más entretenido y aterrador para vos.
        </h2>
      </div>
      <div>
        <div>
          <p>Lo que más quiero es fomentar el hábito de la lectura, que juntos conozcamos otras culturas y podamos intercambiar pensamientos mucho más allá de mis gustos personales.</p>
          <p>Ahora te toca a vos elegir con cuál hacés match hoy, según tu estilo, tus ánimos o lo que necesites: reirte, pensar, aprender, llorar, viajar o volver a creer en el amor.</p>
        </div>
        <ButtonIG caption='IR A LA BIBLIOTECA'/>
        <ButtonIG caption='HACE MATCH CON TU LIBRO'/>
      </div>
    </div>
  )
}
