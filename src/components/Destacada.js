import React from 'react';
import image from '../examples/images/image.jpg';
import { Link } from 'react-router-dom';
function Destacada(props) {
  return (
    <article className="p-4 lg:pr-10">
      <Link to="/energia/slug">
        <div className="p-5">
          <div className="flex flex-wrap">
            <span className="categoria">ENERGÍA</span>
            <span className="categoria">NEUQUÉN</span>
            <span className="categoria">REGIÓN</span>
            <span className="categoria">RENOVABLES</span>
          </div>
          <div className="titulo text-3xl md:text-5xl">
            Calf gestiona 8 millones de dólares para su plan de obras en Neuquén
          </div>
          <div className="copete p-1 md:text-xl md:p-4">
            <b>
              La cooperativa concentrará las inversiones en el extremo oeste de la ciudad, en línea con los proyectos de
              infraestructura pública y privada.
            </b>{' '}
            Se financiará con fondos propios, de Provincia y Nación y se ejecutará en tres años.
          </div>
        </div>
        <div className="h-screen-1/2 bg-no-repeat bg-cover lg:-ml-8" style={{ backgroundImage: `url(${image})` }} />
      </Link>
    </article>
  );
}

export default Destacada;
