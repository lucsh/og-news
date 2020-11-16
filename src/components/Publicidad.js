import React from 'react';

const Placeholder = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-gray-500 uppercase font-bold font-sans tracking-widest">
      <span className="">Publicite aquí</span>
    </div>
  );
};
function Publicidad({ size, img, ...props }) {
  const sizes = {
    mobile: { height: '100px', width: 'auto' },
    small: { height: '100px', width: '850px' },
    medium: { height: '250px', width: '850px' },
    large: { height: '600px', width: '300px' },
  };
  const { height } = sizes[size] || 0;
  const { width } = sizes[size] || 0;
  return (
    <div className="overflow-hidden max-w-full" {...props}>
      <div className="mx-auto bg-gray-200 relative" style={{ height, width }}>
        <div className="p-2 absolute top-0 left-0 text-xs text-gray-900 uppercase font-bold font-sans">Publicidad</div>
        {img ? <img src={img} alt="publicidad" className="absolute top-0 left-0" /> : <Placeholder />}
      </div>
    </div>
  );
}

export default Publicidad;
