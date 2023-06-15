import "./Hotel.css"

import React from 'react'
import Cartelera from './Cartelera';

export default function Hotel() {
  return (
    <>
      <section className="total">
        <div className="contenedor-princ">
          <div className="contenedor-sec1">
            <div>
              <span>favicons</span>
            </div>

            <div className="buscador">
              <input className="pais" type="text" />
              <div  className="personas">
                <input type="text" />
                <button></button>
              </div>
            </div>
          </div>
          <div className="contenedor-sec2">
            <h1 className="titulo-conte">Stays in Finland</h1>
            <div className="contenedor-cart">
              <Cartelera />
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
