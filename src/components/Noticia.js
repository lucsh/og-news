import React from 'react';

function Noticia({ seccion, noticia }) {
  return (
    <div>
      {seccion} - {noticia}
    </div>
  );
}

export default Noticia;
