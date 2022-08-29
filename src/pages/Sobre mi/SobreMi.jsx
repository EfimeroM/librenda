import './SobreMi.scss';

import ButtonIG from '../../components/ButtonIG/ButtonIG';
import { Link } from "react-router-dom";
import React from 'react';
import article1 from '../../assets/sobre-mi/article1.png'
import article2 from '../../assets/sobre-mi/article2.png'
import article3 from '../../assets/sobre-mi/article3.png'
import article4 from '../../assets/sobre-mi/article4.png'
import banner from "../../assets/sobre-mi/banner.png";
import bannerMobile from "../../assets/box-multisensorial/banner-mobile.jpg";
import greenVector from '../../assets/sobre-mi/greenVector.png'
import { useMediaQuery } from "react-responsive";

export const SobreMi = () => {

  const screen = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <div id='sobre-mi'>
      <div className="banner" style={screen ? { backgroundImage: `url("${banner}")` } : { backgroundImage: `url("${bannerMobile}")` }}>
        <div className="content">
          <div className="head">
            <h2 style={screen ? { display: "none" } : { display: "block" }}>
              SOBRE MI
            </h2>
          </div>
          <div className="content-animation">
            <h1>Para cada persona hay un libro...</h1>
            <p>
              Librenda es el mix entre libros, libertad y Brenda (mi nombre), aunque podría ser reemplazado por otro: como el tuyo.
            </p>
            <p>
              Esa es la idea, que este espacio sea para que vos también encuentres tu momento de libertad con los libros.
            </p>
          </div>
        <ButtonIG caption='HACE MATCH CON TU LIBRO'/>
        </div>
      </div>
      <div className='articles'>
        <div className='article articleLeft'>
          <img src={article1} className='left'/>
          <div>
            <Link to={"/"} className='landingLinks' id='link1'><h1>Sobre Mi</h1></Link>
            <p>
              Soy Brenda, Licenciada en Comunicación Social y periodista. Como hobbie realicé muchos cursos, entre ellos, estudié Diseño de Interiores y también aprendí sobre la creación de velas de cera de soja aromáticas.
            </p>
            <p>
              De chica mi momento preferido era cuando me leían cuentos y lo sigue siendo. También, cuando aprendí a escribir me gustaba inventarlos y muchas veces sentaba a mi familia en el comedor para que me escucharan leerlos en voz alta.
            </p>
            <p>
              Todas estas historias me ayudan a empatizar y a poder conectar más conmigo misma y con los otros. Al final, somos más parecidos de lo que creemos.
            </p>
          </div>
        </div>
        <div>
        <svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg" id='quote1'>
            <path d="M16.4938 25.4719C15.928 25.4719 15.385 25.5585 14.8445 25.6375C15.0196 25.0465 15.1997 24.4454 15.489 23.9054C15.7783 23.1209 16.2299 22.4408 16.6791 21.7556C17.0546 21.0143 17.7169 20.5125 18.2041 19.8783C18.7141 19.2619 19.4094 18.8518 19.96 18.3398C20.5005 17.8049 21.2084 17.5374 21.7717 17.1604C22.3604 16.8216 22.873 16.4472 23.4211 16.2689L24.7887 15.7034L25.9915 15.2016L24.7608 10.2651L23.246 10.6319C22.7613 10.7542 22.1701 10.8968 21.4977 11.0675C20.81 11.1949 20.0767 11.5438 19.2596 11.8622C18.4527 12.2239 17.519 12.4685 16.6512 13.0492C15.7783 13.6045 14.7709 14.0681 13.8828 14.8119C13.0226 15.5786 11.9848 16.2434 11.2185 17.219C10.3811 18.1309 9.55392 19.0886 8.91195 20.1788C8.16848 21.2181 7.66353 22.3593 7.13066 23.4877C6.64855 24.6161 6.26032 25.77 5.94314 26.8907C5.34177 29.1374 5.0728 31.2719 4.96876 33.0983C4.88249 34.9271 4.93324 36.4478 5.03981 37.5482C5.07787 38.0678 5.14892 38.5722 5.19967 38.9212L5.26311 39.3491L5.32908 39.3338C5.78039 41.4501 6.81933 43.3949 8.32571 44.9432C9.83209 46.4915 11.7444 47.5801 13.8413 48.083C15.9382 48.5859 18.1342 48.4826 20.175 47.785C22.2159 47.0874 24.0184 45.8241 25.3739 44.1411C26.7294 42.4581 27.5826 40.4243 27.8347 38.2749C28.0869 36.1255 27.7277 33.9484 26.7987 31.9954C25.8698 30.0423 24.409 28.3932 22.5854 27.2388C20.7617 26.0844 18.6498 25.4718 16.4938 25.4719ZM44.4057 25.4719C43.8399 25.4719 43.2969 25.5585 42.7564 25.6375C42.9315 25.0465 43.1116 24.4454 43.4009 23.9054C43.6902 23.1209 44.1418 22.4408 44.591 21.7556C44.9665 21.0143 45.6288 20.5125 46.116 19.8783C46.626 19.2619 47.3212 18.8518 47.8719 18.3398C48.4123 17.8049 49.1203 17.5374 49.6836 17.1604C50.2723 16.8216 50.7849 16.4472 51.3329 16.2689L52.7006 15.7034L53.9034 15.2016L52.6727 10.2651L51.1579 10.6319C50.6732 10.7542 50.082 10.8968 49.4096 11.0675C48.7219 11.1949 47.9886 11.5438 47.1715 11.8622C46.3672 12.2265 45.4308 12.4685 44.563 13.0518C43.6902 13.6071 42.6828 14.0707 41.7947 14.8144C40.9345 15.5811 39.8967 16.246 39.1304 17.219C38.293 18.1309 37.4658 19.0886 36.8238 20.1788C36.0804 21.2181 35.5754 22.3593 35.0425 23.4877C34.5604 24.6161 34.1722 25.77 33.855 26.8907C33.2537 29.1374 32.9847 31.2719 32.8806 33.0983C32.7944 34.9271 32.8451 36.4478 32.9517 37.5482C32.9898 38.0678 33.0608 38.5722 33.1116 38.9212L33.175 39.3491L33.241 39.3338C33.6923 41.4501 34.7312 43.3949 36.2376 44.9432C37.744 46.4915 39.6562 47.5801 41.7532 48.083C43.8501 48.5859 46.046 48.4826 48.0869 47.785C50.1278 47.0874 51.9303 45.8241 53.2858 44.1411C54.6413 42.4581 55.4945 40.4243 55.7466 38.2749C55.9988 36.1255 55.6396 33.9484 54.7106 31.9954C53.7817 30.0423 52.3209 28.3932 50.4972 27.2388C48.6736 26.0844 46.5617 25.4718 44.4057 25.4719Z" fill="#55B191" fill-opacity="0.3"/>
            </svg>
          <h2 id='quoteText'>
            Disfruto de vivir mil vidas en los libros: ya fui una mujer divorciada de 40, una travesti que ejerce la prostitución, estuve en una avión a punto de caerse, y también cumplí 73 y me llevaron a un geriátrico. 
          </h2>
          <svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg" id='quote2'>
          <path d="M44.405 35.6609C44.9708 35.6609 45.5138 35.5743 46.0543 35.4954C45.8792 36.0863 45.6991 36.6875 45.4098 37.2275C45.1205 38.012 44.6689 38.6921 44.2197 39.3773C43.8442 40.1185 43.1819 40.6203 42.6947 41.2546C42.1847 41.871 41.4894 42.2811 40.9388 42.7931C40.3983 43.328 39.6904 43.5955 39.1271 43.9725C38.5384 44.3112 38.0258 44.6857 37.4777 44.864L36.1101 45.4295L34.9073 45.9313L36.138 50.8677L37.6528 50.5009C38.1375 50.3787 38.7287 50.236 39.4011 50.0654C40.0888 49.938 40.8221 49.589 41.6392 49.2706C42.4461 48.9089 43.3798 48.6644 44.2476 48.0836C45.1205 47.5284 46.1279 47.0648 47.016 46.321C47.8762 45.5543 48.914 44.8895 49.6803 43.9139C50.5177 43.002 51.3449 42.0442 51.9869 40.954C52.7303 39.9148 53.2353 38.7736 53.7681 37.6452C54.2503 36.5168 54.6385 35.3629 54.9557 34.2421C55.557 31.9955 55.826 29.861 55.93 28.0346C56.0163 26.2057 55.9656 24.685 55.859 23.5847C55.8209 23.065 55.7499 22.5607 55.6991 22.2117L55.6357 21.7838L55.5697 21.7991C55.1184 19.6828 54.0795 17.738 52.5731 16.1897C51.0667 14.6414 49.1545 13.5528 47.0575 13.0499C44.9606 12.547 42.7647 12.6503 40.7238 13.3479C38.6829 14.0455 36.8804 15.3088 35.5249 16.9918C34.1694 18.6747 33.3162 20.7086 33.0641 22.8579C32.8119 25.0073 33.1711 27.1845 34.1001 29.1375C35.029 31.0905 36.4898 32.7396 38.3134 33.8941C40.1371 35.0485 42.249 35.6611 44.405 35.6609ZM16.4931 35.6609C17.0589 35.6609 17.6019 35.5743 18.1424 35.4954C17.9673 36.0863 17.7872 36.6875 17.4979 37.2275C17.2086 38.012 16.757 38.6921 16.3079 39.3773C15.9323 40.1185 15.27 40.6203 14.7828 41.2546C14.2728 41.871 13.5776 42.2811 13.0269 42.7931C12.4865 43.328 11.7785 43.5955 11.2152 43.9725C10.6265 44.3112 10.114 44.6857 9.56586 44.864L8.19818 45.4295L6.99543 45.9313L8.22609 50.8677L9.74095 50.5009C10.2256 50.3787 10.8168 50.236 11.4892 50.0654C12.1769 49.938 12.9102 49.589 13.7273 49.2706C14.5316 48.9064 15.468 48.6644 16.3358 48.0811C17.2086 47.5258 18.216 47.0622 19.1041 46.3184C19.9643 45.5517 21.0021 44.8869 21.7684 43.9139C22.6058 43.002 23.433 42.0442 24.075 40.954C24.8184 39.9148 25.3234 38.7736 25.8563 37.6452C26.3384 36.5168 26.7266 35.3629 27.0438 34.2421C27.6452 31.9955 27.9141 29.861 28.0182 28.0346C28.1044 26.2057 28.0537 24.685 27.9471 23.5847C27.909 23.065 27.838 22.5607 27.7873 22.2117L27.7238 21.7838L27.6578 21.7991C27.2065 19.6828 26.1676 17.738 24.6612 16.1897C23.1548 14.6414 21.2426 13.5528 19.1456 13.0499C17.0487 12.547 14.8528 12.6503 12.8119 13.3479C10.771 14.0455 8.96854 15.3088 7.61303 16.9918C6.25752 18.6747 5.40434 20.7086 5.15219 22.8579C4.90004 25.0073 5.25922 27.1845 6.18819 29.1375C7.11715 31.0905 8.57794 32.7396 10.4016 33.8941C12.2252 35.0485 14.3371 35.6611 16.4931 35.6609Z" fill="#55B191" fill-opacity="0.3"/>
          </svg>

        </div>
        <div className='article articleRight'>
          <img src={article2} className='right'/>
          <div>
            <Link to={"/que-vas-a-encontrar"} id='link2'><h1>¿Qué vas a encontrar?</h1></Link>
            <p>
              En Librenda vas a encontrar un sinfín de reseñas y recomendaciones de libros para que puedas elegir el que más te inspire en este momento, según tus propios objetivos.
            </p>
            <p>
              Próximamente voy a ofrecer diferentes complementos para que puedas armar tu propio “spa de lectura”, con aromas específicos, texturas, sabores y demás accesorios que acompañen la experiencia
            </p>
          </div>
        </div>
        <div className='article articleLeft'>
          <img src={article3} className='left'/>
          <div>
            <Link to={"/libros"} id='link3'><h1>Libros</h1></Link>
            <p>
              Creo que todos tenemos un libro y no me refiero a una guía para toda la vida, sino todo lo contrario. Un libro que te sirva para este momento en particular que estás pasando, donde podes necesitar: entretenimiento, consuelo, compañía, aprendizaje o respuestas.
            </p>
            <p>El hábito de la lectura es un momento de amor propio, crecimiento, autoconocimiento y exploración de diferentes emociones. </p>
            <p>En mis redes sociales <a>@librendaok</a> te comparto reseñas para que hagas match con tu libro. Próximamente, voy a tener a la venta todo lo que necesitas para armar tu espacio de lectura multisensorial e individual.</p>
          </div>
        </div>
        <div className='article articleRight'>
          <img src={article4} className='right'/>
          <div>
            <Link to={"/box-multisensorial"} id='link4'><h1>Box Multisensorial</h1></Link>
            <p>
              Con Librenda busco que puedas armarte tu propio “spa de lectura”, tan cómodo como para viajar por horas y vivir cientos de historias, decenas de otras vidas, sin cansarte. 
            </p>
            <p>Un momento preparado para conectar, leer en voz alta, susurrando, llorando o a carcajadas sin que nadie te juzgue, porque es solo tuyo.</p>
            <p>Por eso, desde Librenda te quiero ayudar a armar este espacio para vivir una experiencia de lectura con los cinco sentidos: con aromas, música, texturas, sabores y textos en armonía con este momento de tu vida.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
