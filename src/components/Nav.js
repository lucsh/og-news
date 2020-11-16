import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react-web';
import menu from '../media/menuV2.json';
import Publicidad from './Publicidad';

function Nav(props) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="shadow-xs bg-white">
      <div className="lg:container lg:mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
              <div className="text-black text-xl font-bold p-1 tracking-tighter">O|G</div>
              <span className="font-thin m-1 tracking-tight">Noticias</span>
            </div>
          </Link>
          <div className="z-50 block w-20">
            <button
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              className="flex items-center p-4 bg-transparent text-gray-700 hover:text-black"
            >
              <Lottie
                direction={collapsed ? -1 : 1}
                options={{
                  animationData: menu,
                  loop: false,
                }}
              />
            </button>
          </div>
          <div
            onClick={() => {
              setCollapsed(true);
            }}
            className={`z-30 bg-gray-100 bg-opacity-50 absolute top-0 left-0 w-screen h-screen ${
              collapsed ? 'hidden' : 'block'
            }`}
          />
          <div
            className="z-40 absolute border-gray-300 border-r bg-white w-56 top-0 h-screen block flex-grow lg:items-center transition-left duration-500 ease-in-out "
            style={{ left: collapsed ? '-400px' : 0 }}
          >
            <nav className="text-sm lg:flex-grow ">
              <Link to="/">
                <div className="py-5 px-3 flex items-center flex-shrink-0 w-full text-black mr-6 border-gray-300 border-b ">
                  <div className="text-black text-xl font-bold p-1 tracking-tighter">O|G</div>
                  <span className="font-thin m-1 tracking-tight">Noticias</span>
                </div>
              </Link>
              <Link to="/" className="block w-full text-black hover:text-black m-4">
                Últimas Noticias
              </Link>
              <Link className="block w-full text-black hover:text-black m-4" to="/petroleo">
                Petroleo
              </Link>
              <Link className="block w-full text-black hover:text-black m-4" to="/gas">
                Gas
              </Link>
            </nav>
            <div className="flex justify-center flex-shrink-0 ">
              <Link
                to="/"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-900 hover:border-gray-600  hover:text-gray-600 hover:bg-white mt-4 lg:mt-0"
              >
                INGRESAR
              </Link>
            </div>
          </div>
        </div>
        <Publicidad size="small" />
      </div>
    </div>
  );
}

export default Nav;
