import React from 'react'
import html from "../images/icons/html-5.png"
import css from "../images/icons/css-3.png" 
import js from "../images/icons/js.png" 
import react from "../images/icons/react.png"  
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/BoxProyects.css'


export const BoxProyects = ({tittle,image,description, link}) => {
  return (
    <div className='proyect-box flex'>
      <figure className='img-proyect-box'> 
      <img className='img-proyect' src={image} alt='Imagen-Proyectos'/>
      </figure>
      <div className='info-box flex'>
        <h1 className='tittle-proyect'>{tittle}</h1>
        <p className='description-proyect'>{description}</p>
        <div className='mini-icons-box flex'>
        <img src={html}  alt='' className='miniIcons'></img>
        <img src={css}   alt='' className='miniIcons'></img>
        <img src={js}    alt='' className='miniIcons'></img>
        <img src={react} alt='' className='miniIcons'></img>
        </div>
        <a href={link} target='_blank'><button className='btn btn-dark visit'>Visitar</button></a>
      </div>
    </div>
  )
}
