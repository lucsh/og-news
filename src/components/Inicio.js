import React, { Fragment } from 'react';

function Inicio(props) {
  return (
    <div className="max-w-md flex p-6 bg-red-200 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">Titulo</h1>
        <p className="text-base text-gray-700 leading-normal">Contenido mágico</p>
      </div>
    </div>
  );
}

export default Inicio;
