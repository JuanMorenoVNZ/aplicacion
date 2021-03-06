import React from 'react'
import './Portafolio.css'
import prueba2 from './Imagenes/prueba2.jpeg'
import huerto from './Imagenes/huerto.jpg'
import hamburguesas from './Imagenes/hamburguesas.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptopFile } from '@fortawesome/free-solid-svg-icons'


const Portafolio = () => {


    return(
        <div className='portafolio'>
            <main>
                <section>
                    <div className='tituloPor'>
                        <h2>Lo que hago</h2>
                    </div>
                    <div className='tituloPorta'>
                        <h1>Te presento algunos de mis proyectos</h1>
                    </div>
                    <div className='padrePortafolio'>
                        <div className='portafolioUno'>
                            <div className='uno-uno'>
                                <img className='dinastia media' src={prueba2} alt="spy imagen uno" />
                            </div>

                            <div className='uno-dos'>
                                 <h4>Codiing: html + css + sass+ boostrap </h4>
                                 <h2>La Dinastia Burguer</h2>
                                 <p>Desarrollada usando html, css ,sass , boostrap
                                    La Dinastia burguer es un ecomerce estatico para los amantes a la comida </p>
                                 <div className='uno-tres'>
                                 <a className='github' href="https://github.com/Juanframo/desafio"><FontAwesomeIcon className='git'  icon={faGithub} />{" "}</a>
                                 <a className='pages' href="https://juanframo.github.io/desafio/"><FontAwesomeIcon className='pag' icon={faLaptopFile} /> {" "}</a>
                                 </div>
                                 </div>
                            
                        </div>
                        <div className='portafolioDos'>
                       
                           <div className='dos-uno'>
                               <h4>
                               Codiing: html + css +boostrap + 

                               </h4>
                               <h4> JavaScript + React + Firebase</h4>
                               <h2>
                                  Mundo Fresco


                               </h2>
                               <p>
                                  Desarrollada con react y aplicando todo lo aprendido en html, Css y JavaScript. Mundo Fresco es un ecommerce dinamico.
                               </p>
                              
                               <div className='dos-tres'>
                                     <a className='github' href="https://github.com/Juanframo/desafio"><FontAwesomeIcon className='git'  icon={faGithub} />{" "}</a>
                                     <a className='pages' href="https://react-fir-2021.web.app/"><FontAwesomeIcon className='pag' icon={faLaptopFile} /> {" "}</a>
                            
                                 </div>
                           </div>
                            <div className='dos-dos'> 
                           <img className='huerto media' src={huerto} alt="" />
                           </div>

                        </div>
                        <div className='portafolioUno'>
                            <div className='uno-uno'>
                                <img className='dinastia media' src={hamburguesas} alt="spy imagen uno" />
                            </div>

                            <div className='uno-dos'>
                                 <h4 className='subtitulo'>Codiing: html + css + sass+ </h4>
                                 <h4 className='subtitulo'>boostrap+ Javascript</h4>
                                 <h2>La Dinastia Burguer</h2>
                                 <p>Desarrollada usando html, css ,sass , boostrap + Javascript
                                    La Dinastia burguer es un ecommerce dinamico para los amantes a la comida.  </p>
                                 <div className='uno-tres'>
                                 <a className='github' href=""><FontAwesomeIcon className='git'  icon={faGithub} />{" "}</a>
                                 <a className='pages' href="#"><FontAwesomeIcon className='pag' icon={faLaptopFile} /> {" "}</a>
                                 </div>
                                 </div>
                            
                        </div>
                    </div>
                    
                </section>
            </main>
            
        </div>
    )
}

export default Portafolio;