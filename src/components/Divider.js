import React from 'react';

function Divider({ vertical = false }) {
  return (
    <div className="m-4">
      {vertical ? (
        <div className="border-r border-gray-500 h-full" />
      ) : (
        <div className="border-t border-gray-500 w-full" />
      )}
    </div>
  );
}

export default Divider;
