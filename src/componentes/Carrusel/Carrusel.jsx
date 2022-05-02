import React from 'react';
import { imagenes, comentarios } from './dataSlider';
import img1 from '../../Imagenes/Parque/3.20.gif';
import comen1 from '../../Comentarios/comeB1.png';


export default function Carrusel() {

    return (

        <div id="carouselExampleIndicators" class="carousel slide mt-5 mb-5 pt-5" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>

            </div>

            <div class="carousel-inner mt-3">

                <div class="carousel-item active">
                    <div className="container">
                        <div className="row text-center h-100 h-md-30" id="caja">
                            <div class="col-12 col-md-6"><img src={img1} class="d-block w-100 h-100" alt="..." /></div>
                            <div class="col-12 col-md-6"><img src={comen1} class="d-block w-100 h-100" alt="..." /></div>
                        </div>
                    </div>
                </div>


                <div class="carousel-item">
                    <div className="container">
                        <div className="row text-center h-100 h-md-30" id="caja">
                            <div class="col-12 col-md-6"><img src={imagenes[0]} class="d-block w-100 h-100" alt="..." /></div>
                            <div class="col-12 col-md-6"><img src={comentarios[0]} class="d-block w-100 h-100" alt="..." /></div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className="container">
                        <div className="row text-center h-100 h-md-30" id="caja">
                            <div class="col-12 col-md-6"><img src={imagenes[1]} class="d-block w-100 h-100" alt="..." /></div>
                            <div class="col-12 col-md-6"><img src={comentarios[1]} class="d-block w-100 h-100" alt="..." /></div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className="container">
                        <div className="row text-center  h-100 h-md-30" id="caja">
                            <div class="col-12 col-md-6"><img src={imagenes[2]} class="d-block w-100 h-100" alt="..." /></div>
                            <div class="col-12 col-md-6"><img src={comentarios[2]} class="d-block w-100 h-100" alt="..." /></div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className="container">
                        <div className="row text-center h-100 h-md-30" id="caja">
                            <div class="col-12 col-md-6"><img src={imagenes[3]} class="d-block w-100 h-100" alt="..." /></div>
                            <div class="col-12 col-md-6"><img src={comentarios[3]} class="d-block w-100 h-100" alt="..." /></div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className="container">
                        <div className="row text-center h-100 h-md-30" id="caja">
                            <div class="col-12 col-md-6"><img src={imagenes[4]} class="d-block w-100 h-100" alt="..." /></div>
                            <div class="col-12 col-md-6"><img src={comentarios[4]} class="d-block w-100 h-100" alt="..." /></div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className="container">
                        <div className="row text-center h-100 h-md-30" id="caja">
                            <div class="col-12 col-md-6"><img src={imagenes[5]} class="d-block w-100 h-100" alt="..." /></div>
                            <div class="col-12 col-md-6"><img src={comentarios[5]} class="d-block w-100 h-100" alt="..." /></div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className="container">
                        <div className="row text-center h-100 h-md-30" id="caja">
                            <div class="col-12 col-md-6"><img src={imagenes[6]} class="d-block w-100 h-100" alt="..." /></div>
                            <div class="col-12 col-md-6"><img src={comentarios[6]} class="d-block w-100 h-100" alt="..." /></div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className="container">
                        <div className="row text-center h-100 h-md-30" id="caja">
                            <div class="col-12 col-md-6"><img src={imagenes[7]} class="d-block w-100 h-100" alt="..." /></div>
                            <div class="col-12 col-md-6"><img src={comentarios[7]} class="d-block w-100 h-100" alt="..." /></div>
                        </div>
                    </div>
                </div>

            </div>



            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>




    )
}