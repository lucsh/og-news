import React from 'react';
import image from '../examples/images/image2.png';
import { Link } from 'react-router-dom';
function Secundaria(props) {
  return (
    <article className="p-4 lg:p-10">
      <Link to="/energia/slug">
        <div>
          <div>
            <span className="categoria">OIL&GAS</span>
            <span className="categoria">ENERGÍA</span>
          </div>
          <div className="titulo text-2xl md:text-4xl">
            GeoPark realizó su plan 2021 con un barril tope de 45 dólares
          </div>
          <div className="copete p-1 md:text-xl">
            <b>No proyectan nuevos pozos para la Cuenca Neuquina y concentrarán su desarrollo en Colombia.</b> Estiman
            invertir entre 100 a 120 millones de dólares con capital propio.{' '}
          </div>
        </div>
        <div className="p-4 h-screen-1/4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }} />
      </Link>
    </article>
  );
}

export default Secundaria;
