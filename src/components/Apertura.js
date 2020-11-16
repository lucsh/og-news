import React from 'react';
import Destacada from './Destacada';
import Secundaria from './Secundaria';

function Apertura() {
  return (
    <div className="flex flex-wrap">
      <div className="flex-initial w-full lg:w-2/3 py-4 border-b border-gray-500 lg:border-b-0 lg:border-r ">
        <Destacada />
      </div>
      <div className="flex-initial w-full lg:w-1/3">
        <Secundaria />
      </div>
    </div>
  );
}

export default Apertura;
