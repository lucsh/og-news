import React from 'react';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
import { Link } from 'react-router-dom';

function ArticleCard({ article, mostrarCopete=false }) {
  const { titulo, categorias, fecha, copete, foto } = article;
  const parsedFecha = dayjs(fecha).format('D [de] MMMM [de] YYYY');
  return (
    <article className="lg:p-10 w-full md:w-1/3 lg:1/4 border-b border-gray-500 ">
      <Link to="/energia/slug">
        <div className="m-1 p-4 ">
          <div>
            <div className="titulo text-2xl md:text-3xl">{titulo}</div>
            {mostrarCopete ? <div className="copete">{copete}</div> : null}
          </div>
          {categorias.slice(0, 3).map((categoria) => (
            <span key={categoria} className="categoria">
              {categoria}
            </span>
          ))}
          <div className="fecha">{parsedFecha}</div>

          <div className="p-4 h-screen-1/4 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${foto})` }} />
        </div>
      </Link>
    </article>
  );
}

export default ArticleCard;
