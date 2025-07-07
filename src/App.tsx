import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BoxProyects } from './components/BoxProyect';

import * as bootstrap from 'bootstrap';

// imports icons
import html from "./images/icons/html-5.png"
import css from "./images/icons/css-3.png" 
import js from "./images/icons/js.png" 
import react from "./images/icons/react.png"  
import boos from "./images/icons/boos.png"

// import img-proyects
import oficce from "./images/proyects/oficce.png"
import ecommerce from "./images/proyects/ecommerce.png"
import lista from "./images/proyects/lista.png"


//import logos
import fi from "./images/logos/fi.png"
import fre from "./images/logos/fre.png"
import up from "./images/logos/up.png"
import wo from "./images/logos/wo.png"
import link from "./images/logos/link.png"

//yo
import yo from "./images/yo.png"



function App() {

  const [alerta, setAlerta] = useState(true)

  const inputRef = useRef<HTMLInputElement>(null);

  const copiar = () => {
    const textoACopiar = inputRef.current?.value; 
    if (textoACopiar) {
      navigator.clipboard.writeText(textoACopiar);
    }
    
    setAlerta(false)

    setTimeout(() => {
      setAlerta(true);
  }, 2000);
  

  };

  



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("abajo", window.scrollY > 2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = Array.from(tooltipTriggerList).map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Cleanup function to destroy tooltips when component unmounts
    return () => {
      tooltipList.forEach(tooltip => tooltip.dispose());
    };
  }, []);






  return (
    <div className="app">


      <header className='flex'>
        <h1 className='logo'>Marcos Chavez</h1>
        <nav className='links-box flex'>
          <a href="#proyects" className='links'>Proyectos</a>
          <a href="#skills" className='links'>Habilidades</a>
          <a href="#social" className='links'>Contacto</a>
        </nav>
      </header>


      <div className='container max'>


        <section className='main row'>
          <div className='my-info col flex flex-column'>
            <h1 className='my-name'>Marcos Chávez</h1>
            <h3 className='my-profession'>Desarollador <span className='pro-color'>Front-End</span></h3>
            <div className='button-perfil-box flex'>
              <a href="https://linkedin.com/in/marcos-chávez" target='_blank' rel="noopener noreferrer"><button className='hire'>Contrátame</button></a>
              <a  href={require("./cv/CV.pdf")} target="_blank" rel="noopener noreferrer"><button className='cv'>Mi CV</button></a>
            </div>
          </div>

          <div className='col flex flex-column'>
            <figure className='my-foto-box'>
              <img className='my-foto' src={yo} alt="" />
            </figure>
          </div>
        </section>

        <h1 id='proyects' className='section-tittle'>Proyectos <span className="material-symbols-outlined">globe</span></h1>
        <section className='proyects container flex flex-column'>
          <BoxProyects tittle="Netflix Clon" image={oficce} description="Clon de Netflix que utiliza la api de TMDB." link="https://netfliclon.netlify.app/"/>
          <BoxProyects tittle="Ecommerce" image={ecommerce} description="Esta pagina recrea la funcionalidad de un Ecommerce con su propio carrito." link="https://ecommerce-mc.netlify.app/"/>
          <BoxProyects tittle="Lista de Tareas" image={lista} description="¡Has tu lista de tareas y se guardara automaticamente al refrescar la pagina!" link="https://listadetareascvz.netlify.app/"/>
        </section>

        <h1 id='skills' className='section-tittle'>Habilidades <span className="material-symbols-outlined">desktop_windows</span></h1>
        <section className='skills container flex'>
          <div className='icons-box flex flex-column'>
            <div className='gap-3 flex'>
              <img src={html}  alt='' className='icons'></img>
              <img src={css}   alt='' className='icons'></img>
              <img src={boos} alt='' className='icons boos'></img>
              <img src={js}    alt='' className='icons'></img>
              <img src={react} alt='' className='icons'></img>
            </div>

            <div className='gap-3 flex'>
              <p className='tittle-tec'>HTML</p>
              <p className='tittle-tec'>CSS</p>
              <p className='tittle-tec t-boos'>Bootstrap</p>
              <p className='tittle-tec'>Javascript</p>
              <p className='tittle-tec'>React</p>
            </div>
          </div>
        </section>


        <section className='contact container'>
          <h1 id='social' className='section-tittle'>Social <span className="material-symbols-outlined">alternate_email</span></h1>
          <div className='social-box flex flex-column'>

            <div className='gap-4 logos-box flex'>

            <a href='https://www.linkedin.com/in/marcos-ch%C3%A1vez/' target='_blank' className='caja-img'>
                <img src={link} alt='' className='logos'></img>
              </a>

              <a href='https://www.workana.com/freelancer/379d0f589848232939deae6aebce6e70' target='_blank' className='caja-img'>
                <img src={wo} alt='' className='logos'></img>
              </a>

              <a href='https://www.upwork.com/freelancers/~01cd49e29a3f52afcb?mp_source=share' target='_blank' className="caja-img">
                <img src={up} alt='' className='logos'></img>
              </a>

              <a href='https://www.fiverr.com/marcos_cvz?up_rollout=true' target='_blank' className="caja-img">
                <img src={fi} alt='' className='logos'></img>
              </a>

              <a href='https://www.freelancer.com/u/MarcosCvz?frm=MarcosCvz&sb=t' target='_blank' className="caja-img">
                <img src={fre} alt='' className='logos fre'></img>
              </a>

            </div>

          </div>


          <h1 className='section-tittle'>Email <span className="material-symbols-outlined">mail</span></h1>
          <div className='email-box flex'>
          <input className='adress-box flex'  ref={inputRef} type='text' value={"marcoschavezweb@gmail.com"} readOnly></input>
            <button className='btn btn-dark flex' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy"  onClick={copiar}><span className="material-symbols-outlined">content_copy</span></button>
          </div>
        </section>
        </div>


        {/* fuera del app */}
        <div className='back-start'>
        </div>

        <div className={ alerta ? "container-fluid alerta" : "container-fluid alerta-up" }>
          ¡Copied!
        </div>
    </div>
  );
}

export default App;
