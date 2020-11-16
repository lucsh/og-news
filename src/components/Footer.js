import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div className="w-screen bg-gray-900 text-gray-100 flex flex-col p-4">
      <div className="lg:container lg:mx-auto p-4">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 text-black my-4">
            <div className="text-gray-400 text-xl font-bold p-1 tracking-tighter">O|G</div>
            <span className="font-thin text-gray-400 m-1 tracking-tight">Noticias</span>
          </div>
        </Link>
        <div>2020 -Todos los derechos reservados</div>
      </div>
    </div>
  );
}

export default Footer;
